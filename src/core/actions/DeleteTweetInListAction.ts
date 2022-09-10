import { deleteTweetActionName, deleteTweetInListActionName } from "src/shared/constants/actions.names";
import { Action } from "../ports/actions/Action";

export class DeleteTweetInListAction extends Action<string> {
    constructor(payload: string){
        super(deleteTweetInListActionName, payload);
    }
}