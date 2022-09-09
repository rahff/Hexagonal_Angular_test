import { ActionFactory } from "../factories/ActionFactory";

export interface Dispatcher {
    
    dispatch(name: string, payload: any): void;
}