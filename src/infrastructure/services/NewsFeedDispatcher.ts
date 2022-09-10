import { Injectable } from "@angular/core";
import { AddTweetAction } from "src/core/actions/AddTweetAction";
import { GetTweetListAction } from "src/core/actions/GetTweetListAction";
import { LikeTweetAction } from "src/core/actions/LikeTweetAction";
import { SetTweetListAction } from "src/core/actions/SetTweetListAction";
import { SetTweetLikeAction } from "src/core/actions/SetTweetLike";
import { getTweetListActionName, setTweetListActionName, likeTweetActionName, setTweetLikeActionName, addTweetActionName, deleteTweetActionName } from "src/shared/constants/actions.names";
import { NewsFeedStore } from "../../core/stores/NewsFeedStore";
import { Dispatcher } from "./Dispatcher";
import { DeleteTweetAction } from "src/core/actions/DeleteTweetAction";


@Injectable({
    providedIn: "root"
})
export class NewsFeedDispatcher implements Dispatcher {
    
    constructor(private store: NewsFeedStore){}

    dispatch(name: string, payload: any): void {
        const action = this.createAction(name, payload)
        this.store.dispatch(action);
    }

    private createAction(name: string, payload: any) {
        switch (name) {
            case getTweetListActionName:
                return new GetTweetListAction();
            case likeTweetActionName:
                return new LikeTweetAction(payload);
            case addTweetActionName:
                return new AddTweetAction(payload);
            case deleteTweetActionName:
                return new DeleteTweetAction(payload);
            default: throw new Error("unknow action");
        }
    }
}