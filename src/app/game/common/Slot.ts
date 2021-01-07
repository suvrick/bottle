export class SlotVoid
{
	private callbacks: (() => void)[] = [];

	public call(): void
	{
		for (let callback of this.callbacks.slice())
			callback();
	}

	public wait(): Promise<void>
	{
		return new Promise((r) => this.addOnce(r));
	}

	public clear(): void
	{
		this.callbacks.length = 0;
	}

	public subscribe(callback: () => void)
	{
		this.add(callback);
		return () => this.remove(callback);
	}

	public add(callback: () => void): void
	{
		if (this.callbacks.indexOf(callback) >= 0)
			return;

		this.callbacks.push(callback);
	}

	public addOnce(callback: () => void): void
	{
		let onceCall = (): void =>
		{
			callback();
			this.remove(onceCall);
		};
		this.add(onceCall);
	}

	public remove(callback: () => void): void
	{
		if (this.callbacks.indexOf(callback) >= 0)
			this.callbacks.splice(this.callbacks.indexOf(callback), 1);
	}
}

export class Slot<TData>
{
	private callbacks: ((d: TData) => void)[] = [];

	public call(data: TData): void
	{
		for (let callback of this.callbacks.slice())
			callback(data);
	}

	public clear(): void
	{
		this.callbacks.length = 0;
	}

	public has(callback: (d: TData) => void): boolean
	{
		return this.callbacks.indexOf(callback) >= 0;
	}

	public add(callback: (d: TData) => void): void
	{
		if (this.has(callback))
			return;

		this.callbacks.push(callback);
	}

	public wait(predicate: (TData) => boolean = () => true): Promise<TData>
	{
		return new Promise(resolve =>
		{
			let cb = (e: TData) =>
			{
				if (predicate(e))
				{
					this.remove(cb);
					resolve(e);
				}
			}
			this.add(cb);
		})
	}

	public addFilter(filter: (d: TData) => boolean, callback: (d: TData) => void): void
	{
		let cb = (d: TData): void =>
		{
			if (filter(d))
				callback(d);
		};

		this.callbacks.push(cb);
	}

	public addOnce(callback: (d: TData) => void): void
	{
		let onceCall = (d: TData): void =>
		{
			callback(d);
			this.remove(onceCall);
		};
		this.add(onceCall);
	}

	public remove(callback: (d: TData) => void): void
	{
		let index: number = this.callbacks.indexOf(callback);
		if (index !== -1)
			this.callbacks.splice(index, 1);
	}
}

export class PromiseValue<TData> implements PromiseLike<TData>
{
	private value: TData = null;
	private promise: Promise<TData> = null;
	private resolved: (d: TData) => void = null;

	public constructor()
	{
		this.promise = new Promise((resolve): void =>
		{
			this.resolved = (value: TData): void => resolve(value);
		});
	}

	public resolve(value: TData): void
	{
		this.value = value;
		this.resolved(this.value);
	}

	public then<TResult1 = TData, TResult2 = never>(onfulfilled?: (value: TData) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2>
	{
		return this.promise.then(onfulfilled, onrejected);
	}
}

export class Value<TData>
{
	private callbacks: ((d: TData) => void)[] = [];

	public constructor(private _value?: TData)
	{}

	public dispatch(): void
	{
		this.call(this._value);
	}

	public get value(): TData
	{
		return this._value;
	}

	public set value(v: TData)
	{
		if (this._value === v)
			return;
		this._value = v;

		this.dispatch();
	}

	public clear(): void
	{
		this.callbacks.length = 0;
	}

	public wait(filter: (data: TData) => boolean): Promise<TData>
	{
		return new Promise((resolve): void =>
		{
			let callback = (data: TData): void =>
			{
				if (!filter(data))
					return;

				this.remove(callback);
				resolve();
			};
			this.add(callback);
		});
	}

	public add(callback: (d: TData) => void, call: boolean = false): void
	{
		if (this.callbacks.indexOf(callback) != -1)
			return;

		this.callbacks.push(callback);
		if (call)
			callback(this.value);
	}

	public subscribe(callback: (d: TData) => void): () => void
	{
		this.add(callback);
		return () => this.remove(callback);
	}

	public addOnce(callback: (d: TData) => void): void
	{
		let called: boolean = false;
		let onceCall = (d: TData): void =>
		{
			if (!called)
			{
				called = true;
				callback(d);
			}
			this.remove(onceCall);
		};
		this.add(onceCall);
	}

	public remove(callback: (d: TData) => void): void
	{
		let index: number = this.callbacks.indexOf(callback);
		if (index < 0)
			return;

		this.callbacks.splice(index, 1);
	}

	private call(data: TData): void
	{
		for (let callback of this.callbacks.slice())
			callback(data);
	}
}