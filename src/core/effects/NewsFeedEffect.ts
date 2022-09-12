import { Action } from "../ports/actions/Action";
import { TweetRepository } from "../ports/repositories/TweetRepository";
import { addCommentaryActionName, addTweetActionName, deleteTweetActionName, getTweetListActionName, likeTweetActionName, modifyTweetContentActionName, setTweetLikeActionName, setTweetListActionName } from "../../shared/constants/actions.names";
import { Effect } from "./Effect";

import { DeleteTweetInListAction } from "../actions/synchronous/DeleteTweetInListAction";
import { ModifyTweetInListAction } from "../actions/synchronous/ModifyTweetInList";
import { AddTweetInListAction } from "../actions/synchronous/AddTweetInListAction";
import { SetTweetLikeAction } from "../actions/synchronous/SetTweetLike";
import { SetTweetListAction } from "../actions/synchronous/SetTweetListAction";
import { AddCommentaryInListAction } from "../actions/synchronous/AddCommentaryInListAction";



export class NewsFeedEffect implements Effect{

    constructor(private TweetRepository: TweetRepository){}

    async createEffect(action: Action): Promise<Action> {
        switch (action.getName()) {
            case getTweetListActionName:
                const tweetList = await this.TweetRepository.getList(action.getPayload());
                return new SetTweetListAction(tweetList);
            case likeTweetActionName:
                const likeOfTweet = await this.TweetRepository.likeTweet(action.getPayload());
                return new SetTweetLikeAction(action.getPayload());
            case addTweetActionName:
                const savedTweet = await this.TweetRepository.saveTweet(action.getPayload());
                return new AddTweetInListAction(savedTweet);
            case deleteTweetActionName:
                const deletedTweetId = await this.TweetRepository.deleteTweet(action.getPayload());
                return new DeleteTweetInListAction(deletedTweetId);
            case modifyTweetContentActionName:
                const updatedTweet = await this.TweetRepository.updateTweet(action.getPayload());
                return new ModifyTweetInListAction(updatedTweet);
            case addCommentaryActionName:
                const savedCommentary = await this.TweetRepository.saveCommentary(action.getPayload());
                return new AddCommentaryInListAction({commentary: savedCommentary})
            default: throw new Error("unknow action");
        }
    }
}