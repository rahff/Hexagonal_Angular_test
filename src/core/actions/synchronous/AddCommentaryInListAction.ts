import { Commentary } from "src/core/entities/Commentary";
import { Action } from "src/core/ports/actions/Action";
import { addCommentaryInListActionName } from "src/shared/constants/actions.names";

export class AddCommentaryInListAction extends Action<AddCommentaryInListPayload> {
    constructor(payload: AddCommentaryInListPayload) {
        super(addCommentaryInListActionName, payload);
    }
}

export interface AddCommentaryInListPayload {
    commentary: Commentary
}