import { modifyTweetInListActionName } from "../../../shared/constants/actions.names";
import { Tweet } from "../../entities/Tweet";
import { Action } from "../../ports/actions/Action";

export class ModifyTweetInListAction extends Action<Tweet> {
    constructor(payload: Tweet){
        super(modifyTweetInListActionName, payload);
    }
}
