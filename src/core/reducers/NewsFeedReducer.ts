import { Action } from "../ports/actions/Action";
import { NewsFeedState } from "../states/NewsFeedState";
import { SynchronousActionNotFoundException } from "../exceptions/SynchronousActionNotFoundException";
import { setTweetListActionName } from "../../shared/constants/actions.names";

export class NewsFeedReducer {

    reduceState(initialState: NewsFeedState, action: Action): NewsFeedState {
        switch (action.getName()) {
            case setTweetListActionName:
                return {
                    ...initialState,
                    tweetList : action.getPayload()
                }
            default: throw new SynchronousActionNotFoundException();
            
        }
    }
}