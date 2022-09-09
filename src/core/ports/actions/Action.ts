export abstract class Action<T=any> {

    protected name: string;
    protected payload: T;

    constructor(name: string, payload: T){
        this.name = name;
        this.payload = payload;
    }

    getName(): string {
        return this.name;
    }

    getPayload(): T {
        return this.payload;
    }
}