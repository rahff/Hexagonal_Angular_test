import { addTweetActionName } from "src/shared/constants/actions.names";
import { Tweet } from "../../entities/Tweet";
import { Action } from "../../ports/actions/Action";



export class AddTweetAction extends Action<AddTweetActionPayload> {
    constructor(payload: AddTweetActionPayload){
        super(addTweetActionName, payload);
    }
}

export interface AddTweetActionPayload {
    tweet: Tweet
}