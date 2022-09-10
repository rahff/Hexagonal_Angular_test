import { setTweetLikeActionName } from "src/shared/constants/actions.names";
import { Action } from "../ports/actions/Action";

export class SetTweetLikeAction extends Action<SetTweetLikePayload> {

    constructor(payload: {id: string, likes: number}){
        super(setTweetLikeActionName, payload);
    }
}
export interface SetTweetLikePayload {id: string, likes: number}