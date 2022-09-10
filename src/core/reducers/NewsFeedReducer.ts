import { Action } from "../ports/actions/Action";
import { NewsFeedState } from "../states/NewsFeedState";
import { SynchronousActionNotFoundException } from "../exceptions/SynchronousActionNotFoundException";
import { addTweetInListActionName, deleteTweetInListActionName, setTweetLikeActionName, setTweetListActionName } from "../../shared/constants/actions.names";
import { Tweet } from "../entities/Tweet";

export class NewsFeedReducer {

    reduceState(initialState: NewsFeedState, action: Action): NewsFeedState {
        switch (action.getName()) {
            case setTweetListActionName:
                return {
                    ...initialState,
                    tweetList : action.getPayload()
                }
            case setTweetLikeActionName:
                return {
                    ...initialState,
                    tweetList : this.setLikeOnTweet(action.getPayload(), initialState.tweetList)
                }
            case addTweetInListActionName:
                return {
                    ...initialState,
                    tweetList: [...initialState.tweetList, action.getPayload()]
                }
            case deleteTweetInListActionName:
                return {
                    ...initialState,
                    tweetList: this.deleteTweetInList(initialState.tweetList, action.getPayload())
                }
            default: throw new SynchronousActionNotFoundException();
            
        }
    }

    private deleteTweetInList(list: Tweet[], deletedId: string): Tweet[] {
        return list.filter((tweet: Tweet)=> tweet.id !== deletedId);
    }

    private setLikeOnTweet(payload: {id: string, likes: number}, tweetList: Tweet[]): Tweet[] {
        return tweetList.map((tweet: Tweet)=> {
            if(tweet.id === payload.id){
                tweet.likes = payload.likes;
            }
            return tweet;
        })
    }
}