import { likeTweetActionName } from "src/shared/constants/actions.names";
import { Action } from "../ports/actions/Action";

export class LikeTweetAction extends Action<string> {

    constructor(tweetId: string){
        super(likeTweetActionName, tweetId);
    }
}