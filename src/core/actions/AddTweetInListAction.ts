import { addTweetActionName, addTweetInListActionName } from "src/shared/constants/actions.names";
import { Tweet } from "../entities/Tweet";
import { Action } from "../ports/actions/Action";



export class AddTweetInListAction extends Action<Tweet> {
    constructor(payload: Tweet){
        super(addTweetInListActionName, payload);
    }
}