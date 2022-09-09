import { Injectable } from "@angular/core";
import { NewsFeedStore } from "../../core/stores/NewsFeedStore";
import { ActionFactory } from "../factories/ActionFactory";
import { Dispatcher } from "./Dispatcher";


@Injectable({
    providedIn: "root"
})
export class NewsFeedDispatcher implements Dispatcher {
    
    constructor(private store: NewsFeedStore){}

    dispatch(name: string, payload: any): void {
        const action = ActionFactory.createAction(name, payload);
        this.store.dispatch(action);
    }
}