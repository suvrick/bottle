import { Gender } from "./players/Gender"
import { NetType } from "./players/NetType"
import { ClientPacketType } from "./protocol/ClientPacketType"
import { Connection } from "./protocol/Connection"
import { DeviceType } from "./protocol/DeviceType"
import { PacketServer, ServerPacketType } from "./protocol/PacketServer"

export class Bot {
    Id: number
    Date?: Date
    Login: LoginParam
    Info?: Player
}

export class LoginParam {
    LoginId?: number
    SocialType?: string
    Token?: string
    Token2?: string
    FullUrl?: string

    BotId: number
}

export class Player {
    PlayerId: number
    Name: string
    Photo: string
    SocialLink: string

    BotId: number
}

export const Parse = (url: string): LoginParam => {
    return new LoginParam()
}

export const connectAndLogin = async (): Promise<PacketServer> =>
{
        let loginData: any
        let SERVER_HOST = "wss://bottlews.itsrealgames.com"
        let SERVER_PORT = 443
        let connection = new Connection();

		if (connection.isActive)
			connection.close();

		await connection.connectTo(SERVER_HOST, SERVER_PORT, DeviceType.DEVICE_PC);

		connection.waitPacket(ServerPacketType.HELLO).then((): void => console.log("HELLO"));
		let captcha = "";

		let sendLogin = async (): Promise<PacketServer> =>
		{
			let referer: number = 0;
			let deviceType = DeviceType.DEVICE_PC;
			let tag = "";
			let gender: Gender = Gender.Man;

            /*
                if (loadParams["auth_with"])
                {
                    var data = loadParams["auth_with"].split(",");
                    loginData.id = data[0];
                    loginData.netType = data[1] as any | 0;
                    loginData.key = data[2];
                }
            */

           loginData.id = 113594657
           loginData.key = "7a2b140e7b42935768c040a54ade4cfc"
           loginData.accessToken = ""
           loginData.net = 32;
           loginData.oauth = 0;

            connection.sendData(ClientPacketType.LOGIN, 
                loginData.id, 
                loginData.netType, 
                deviceType, 
                loginData.key, 
                loginData.oauth || 0, 
                loginData.accessToken || "", 
                referer, 
                tag, 
                0, 
                "", 
                "ru", 
                "", 
                gender, 
                captcha);

			let loginPacket = await connection.waitPacket(ServerPacketType.LOGIN);
                console.log(loginPacket)

			switch (loginPacket["Status"])
			{
				case PacketServer.LOGIN_EXIST:
					return await sendLogin();
				case PacketServer.LOGIN_SUCCESS:
					connection.sendData(ClientPacketType.REFILL);
					return loginPacket;
				case PacketServer.LOGIN_CAPTCHA:
                    return loginPacket;
				case PacketServer.LOGIN_NO_SEX:
					return loginPacket;
				default:
					return loginPacket;
			}
		};

		return await sendLogin();
	}