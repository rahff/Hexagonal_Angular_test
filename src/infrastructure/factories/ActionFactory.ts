import { getTweetListActionName, setTweetListActionName } from "../../shared/constants/actions.names";
import { GetTweetListAction } from "../../core/actions/GetTweetListAction";
import { SetTweetAction } from "../../core/actions/SetTweetAction";
import { Action } from "../../core/ports/actions/Action";

export class ActionFactory {

    public static createAction(name: string, payload?: any): Action {
        switch (name) {
            case getTweetListActionName:
                return new GetTweetListAction();
            case setTweetListActionName:
                return new SetTweetAction(payload);
            default: throw new Error("unknow action");
        }
    }
}