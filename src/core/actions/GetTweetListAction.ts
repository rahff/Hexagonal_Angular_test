import { getTweetListActionName } from "../../shared/constants/actions.names";
import { Action } from "../ports/actions/Action";


export class GetTweetListAction extends Action<null> {

    constructor(){
        super(getTweetListActionName, null)
    }
}