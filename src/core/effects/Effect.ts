import { Repository } from "../abstraction/Repository";
import { Action } from "../actions/Action";




export class Effect {

    constructor(private repository: Repository){}

    async createAction(action: Action): Promise<Action> {
        switch (action.getName()) {
            case "async_action_1":
                const actionPayload = await this.repository.getNewsFeedData();
                return new Action("action_4", actionPayload);
            default: throw new Error("");
        }
    }
}