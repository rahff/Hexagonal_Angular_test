import { likeTweetActionName } from "src/shared/constants/actions.names";
import { Action } from "../../ports/actions/Action";

export class LikeTweetAction extends Action<LikeTweetActionPayload> {

    constructor(payload: LikeTweetActionPayload){
        super(likeTweetActionName, payload);
    }
}

export interface LikeTweetActionPayload {
    tweetId: string;
}