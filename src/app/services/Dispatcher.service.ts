import { Injectable } from "@angular/core";
import { Dispatcher } from "src/core/abstraction/Dispathcher";
import { Action } from "../../core/actions/Action";
import { NewsFeedStore } from "../../core/store/NewsFeedStore";



@Injectable({
    providedIn: "root"
})
export class DispatcherService implements Dispatcher {


    constructor(private newsFeedStore: NewsFeedStore){}

    dispatch(name: string, payload: any): void {
        const action = new Action(name, payload);
        this.newsFeedStore.dispatch(action);
    }
}