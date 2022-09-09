import { Action } from "src/core/ports/actions/Action";

export class FakeAction extends Action {

    constructor(){
        super("fake_action", null)
    }
}