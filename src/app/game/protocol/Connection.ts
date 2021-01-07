import { ByteArray } from "../net/ByteArray";
import { Socket } from "../net/Socket";
import { ClientPacketType } from "./ClientPacketType";
import { DeviceType } from "./DeviceType";
import { PacketClient } from "./PacketClient";
import { PacketServer, ServerPacketType } from "./PacketServer";

let loadParams: any

export class Connection extends Socket 
{

	private clientPacketId: number = 0;
	private serverPacketId: number = 0;
	private paused: boolean = false;
	private length: number = 0;
	private listeners: ((p: PacketServer) => void)[][] = [];
	private isBusy: boolean = false;
	private packetsQueue: PacketServer[] = [];
	private tempBuffer: ByteArray = null;
	private deviceType: DeviceType = null;

	public allowReconnect: boolean = false;

	public constructor()
	{
		super();

		for (let i = 0; i <= ServerPacketType.MAX_TYPE; i++)
			this.listeners[i] = [];

		this.endian = ByteArray.LITTLE_ENDIAN;

		this.onConnectionClosed.add(this.onCloseSocket.bind(this));
		this.onErrorOccured.add(this.onErrorSocket.bind(this));

		this.onDataReceived.add(this.onData.bind(this));
	}

	public waitPacket(type: number): Promise<PacketServer>
	{
		return new Promise((resolve): void =>
		{
			this.wait(type, (p: PacketServer): void => resolve(p));
		});
	}

	public wait(type: number, callback: (p: PacketServer) => boolean | void): void
	{
		let cb = (p: PacketServer): void =>
		{
			if (!callback(p))
				this.forget(cb, [type]);
		};
		this.listen(cb, [type]);
	}

	public pause(): void
	{
		this.paused = true;
		console.log("Connection paused");
	}

	public resume(): void
	{
		console.log("Connection resumed");
		this.paused = false;
		this.dispatchPackets();
	}

	public listenStrict(type: number, listener: any): () => void
	{
		let cb = (p: any): void =>
		{
			listener.apply(null, p);
		};
		return this.listen(cb, [type]);
	}

	public listen(listener: (packet: PacketServer) => void, packets: number[]): () => void
	{
		if (listener == null)
			console.log("err NULL listener for listen packet");

		for (let i = packets.length - 1; i >= 0; --i)
		{
			let index: number = this.listeners[packets[i]].indexOf(listener);
			if (index !== -1)
				continue;

			this.listeners[packets[i]].unshift(listener);
		}

		return (): void => this.forget(listener, packets);
	}

	public forget(listener: (packet: PacketServer) => void, packets: number[]): void
	{
		for (let i = packets.length - 1; i > -1; --i)
		{
			let index: number = this.listeners[packets[i]].indexOf(listener);
			if (index === -1)
				continue;

			this.listeners[packets[i]].splice(index, 1);
		}
	}

	public connectTo(host: string, port: number, deviceType: DeviceType): Promise<void>
	{

		console.log("Connecting to: " + host + ":" + port + " deviceType=" + deviceType);
		this.allowReconnect = false;
		this.deviceType = deviceType;

		return super.connect(host, 443);
	}

	public sendData(type: number, ...args: any[]): void
	{
		if (!this.connected)
		{
			console.warn("Trying to send packet to closed connection");
			return;
		}

		console.log("Send packet " + ClientPacketType[type] + " type " + type + " id " + this.clientPacketId + " data: " + type, args);
		let packet = new PacketClient(type, this.deviceType);
		packet.load(args);

		this.writeUnsignedInt(packet.length + 4);
		this.writeUnsignedInt(this.clientPacketId++);
		this.writeBytes(packet);
		this.flush();
	}

	private receiveData(buffer: ByteArray): void
	{
		let id: number = buffer.readUnsignedInt();
		let type: number = buffer.readUnsignedShort();

		if (type >= ServerPacketType.MAX_TYPE)
		{
			console.error("Received server packet with wrong type " + type);
			return;
		}

		if (type <= 0)
			throw new Error("Received server packet with wrong type " + type);

		let packet = new PacketServer(type, id, buffer);

		if (id !== this.serverPacketId)
		{
			console.log(`Reading packet ${ServerPacketType[packet.type]}:${packet.type} with id ${packet.id} and length ${packet.length} data: ${packet.bytesLength > 300 ? "..." : packet}\n`);
			console.error("Error. server packets was skipped. Expected id=" + (this.serverPacketId + 1) + " packet id=" + id);
			this.allowReconnect = true;
			this.close();
			return;
		}

		this.serverPacketId = id + 1;

		this.packetsQueue.push(packet);
		this.dispatchPackets();
	}

	private dispatchPackets(): void
	{
		var count = 20;
		while (this.packetsQueue.length > 0 && !this.isBusy && !this.paused)
		{
			this.isBusy = true;

			try
			{
				let packet: PacketServer = this.packetsQueue.shift();
				console.log(`Reading packet ${ServerPacketType[packet.type]}:${packet.type} with id ${packet.id} and length ${packet.length} data: ${packet.bytesLength > 300 ? "..." : packet}\n`);

				let functions: ((p: PacketServer) => void)[] = this.listeners[packet.type].slice();

				for (let i = functions.length - 1; i > -1; --i)
					functions[i](packet);
			}
			catch (e)
			{
				console.log(e);
				console.log("Stack:" + (e as Error).stack);
				setTimeout((): void => { throw e; }, 1);
			}
			finally
			{
				this.isBusy = false;
				if (!count--)
					setTimeout(() => this.dispatchPackets(), 100);
			}
		}
	}

	private onErrorSocket(): void
	{
		console.log("onErrorSocket ");
		this.close();

		this.clientPacketId = 0;
		this.serverPacketId = 0;
	}

	private onCloseSocket(): void
	{
		this.clientPacketId = 0;
		this.serverPacketId = 0;
	}

	private onData(): void
	{
		if (this.tempBuffer == null)
		{
			this.tempBuffer = new ByteArray();
			this.tempBuffer.endian = ByteArray.LITTLE_ENDIAN;
		}

		while (true)
		{
			if (!this.connected || this.bytesAvailable < 4)
				return;

			if (this.length === 0)
				this.length = this.readUnsignedInt();

			if (this.length > this.bytesAvailable)
				return;

			this.readBytes(this.tempBuffer, 0, this.length);
			this.length = 0;
			this.receiveData(this.tempBuffer);
			this.tempBuffer.length = 0;
			this.tempBuffer.position = 0;
		}
	}
}