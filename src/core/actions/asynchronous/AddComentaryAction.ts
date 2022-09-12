import { Action } from "src/core/ports/actions/Action";
import { addCommentaryActionName } from "src/shared/constants/actions.names";

export class AddCommentaryAction extends Action<AddCommentaryPayload> {
    constructor(payload: AddCommentaryPayload) {
        super(addCommentaryActionName, payload);
    }
}

export interface AddCommentaryPayload {
    tweetRef: string;
    tweetosRef: string;
    content: string;
}