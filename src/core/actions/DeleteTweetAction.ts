import { deleteTweetActionName } from "src/shared/constants/actions.names";
import { Action } from "../ports/actions/Action";

export class DeleteTweetAction extends Action<string> {
    constructor(payload: string){
        super(deleteTweetActionName, payload);
    }
}