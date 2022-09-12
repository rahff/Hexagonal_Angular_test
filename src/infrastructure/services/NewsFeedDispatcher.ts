import { Injectable } from "@angular/core";
import { AddTweetAction } from "src/core/actions/asynchronous/AddTweetAction";
import { GetTweetListAction } from "src/core/actions/asynchronous/GetTweetListAction";
import { LikeTweetAction } from "src/core/actions/asynchronous/LikeTweetAction";
import { getTweetListActionName, likeTweetActionName, addTweetActionName, deleteTweetActionName, modifyTweetContentActionName, addCommentaryActionName } from "src/shared/constants/actions.names";
import { NewsFeedStore } from "../../core/stores/NewsFeedStore";
import { Dispatcher } from "./Dispatcher";
import { DeleteTweetAction } from "src/core/actions/asynchronous/DeleteTweetAction";
import { ModifyTweetContentAction } from "src/core/actions/asynchronous/ModifyTweetContent";
import { Tweet } from "src/core/entities/Tweet";
import { AddCommentaryAction } from "src/core/actions/asynchronous/AddComentaryAction";


@Injectable({
    providedIn: "root"
})
export class NewsFeedDispatcher implements Dispatcher {
    
    constructor(private store: NewsFeedStore){}

    dispatch(name: string, payload: any): void {
        const action = this.createAction(name, payload)
        this.store.dispatch(action);
    }

    private createAction(name: string, payload?: any) {
        switch (name) {
            case getTweetListActionName:
                return new GetTweetListAction(payload);
            case likeTweetActionName:
                return new LikeTweetAction(payload);
            case addTweetActionName:
                return new AddTweetAction(payload);
            case deleteTweetActionName:
                return new DeleteTweetAction(payload);
            case modifyTweetContentActionName:
                return new ModifyTweetContentAction(payload);
            case addCommentaryActionName:
                return new AddCommentaryAction(payload)
            default: throw new Error("unknow action");
        }
    }
}