import { Action } from "../actions/Action";
import { Effect } from "../effects/Effect";
import { SynchronousActionException } from "../exceptions/SynchronousActionException";
import { NewsFeedState } from "../store/NewsFeedStore";

export class Reducer {

    constructor(){}

    reduceState(initialState: NewsFeedState, action: Action): NewsFeedState {
        switch (action.getName()) {
            case "action_1":
            return {
                ...initialState,
                test: action.getPayload()
            }
            case "action_2":
            return {
                ...initialState,
                test: action.getPayload()
            }
            case "action_3":
            return {
                ...initialState,
                test: action.getPayload()
            }

            case "action_4":
            return {
                ...initialState,
                test: action.getPayload()
            }

            default: throw new SynchronousActionException();
        }

    }
}