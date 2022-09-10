import { Action } from "../ports/actions/Action";
import { TweetRepository } from "../ports/repositories/TweetRepository";
import { addTweetActionName, deleteTweetActionName, getTweetListActionName, likeTweetActionName, setTweetLikeActionName, setTweetListActionName } from "../../shared/constants/actions.names";
import { Effect } from "./Effect";
import { SetTweetListAction } from "../actions/SetTweetListAction";
import { SetTweetLikeAction } from "../actions/SetTweetLike";
import { AddTweetInListAction } from "../actions/AddTweetInListAction";
import { DeleteTweetInListAction } from "../actions/DeleteTweetInListAction";



export class NewsFeedEffect implements Effect{

    constructor(private TweetRepository: TweetRepository){}

    async createEffect(action: Action): Promise<Action> {
        switch (action.getName()) {
            case getTweetListActionName:
                const tweetList = await this.TweetRepository.getList();
                return new SetTweetListAction(tweetList);
            case likeTweetActionName:
                const likeOfTweet = await this.TweetRepository.likeTweet(action.getPayload());
                return new SetTweetLikeAction({id: action.getPayload(), likes: likeOfTweet});
            case addTweetActionName:
                const savedTweet = await this.TweetRepository.saveTweet(action.getPayload());
                return new AddTweetInListAction(savedTweet);
            case deleteTweetActionName:
                const deletedTweetId = await this.TweetRepository.deleteTweet(action.getPayload());
                return new DeleteTweetInListAction(deletedTweetId);
            default: throw new Error("unknow action");
        }
    }
}