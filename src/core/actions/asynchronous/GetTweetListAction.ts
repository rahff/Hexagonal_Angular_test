import { getTweetListActionName } from "../../../shared/constants/actions.names";
import { Action } from "../../ports/actions/Action";


export class GetTweetListAction extends Action<GetTweetListActionPayload> {

    constructor(payload:GetTweetListActionPayload){
        super(getTweetListActionName, payload)
    }
}

export interface GetTweetListActionPayload {
    tweetosId: string;
}