import { Tweet } from "src/core/entities/Tweet";
import { Action } from "src/core/ports/actions/Action";
import { addTweetInListActionName } from "src/shared/constants/actions.names";



export class AddTweetInListAction extends Action<Tweet> {
    constructor(payload: Tweet){
        super(addTweetInListActionName, payload);
    }
}