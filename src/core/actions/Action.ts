export class Action {

    constructor(private name: string, private payload: any){}

    getName(){
        return this.name;
    }

    getPayload(){
        return this.payload;
    }
}