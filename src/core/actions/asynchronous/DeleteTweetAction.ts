import { deleteTweetActionName } from "src/shared/constants/actions.names";
import { Action } from "../../ports/actions/Action";

export class DeleteTweetAction extends Action<DeleteTweetActionPayload> {
    constructor(payload: DeleteTweetActionPayload){
        super(deleteTweetActionName, payload);
    }
}

export interface DeleteTweetActionPayload {
    tweetId: string;
}