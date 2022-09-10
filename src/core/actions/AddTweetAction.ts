import { addTweetActionName } from "src/shared/constants/actions.names";
import { Tweet } from "../entities/Tweet";
import { Action } from "../ports/actions/Action";



export class AddTweetAction extends Action<Tweet> {
    constructor(payload: Tweet){
        super(addTweetActionName, payload);
    }
}