import { modifyTweetContentActionName } from "../../../shared/constants/actions.names";
import { Tweet } from "../../entities/Tweet";
import { Action } from "../../ports/actions/Action";

export class ModifyTweetContentAction extends Action<ModifyTweetContentPayload> {
    constructor(payload: ModifyTweetContentPayload){
        super(modifyTweetContentActionName, payload);
    }
}

export interface ModifyTweetContentPayload {tweetId: string, update: Partial<Tweet>}