import { AddCommentaryPayload } from "src/core/actions/asynchronous/AddComentaryAction";
import { AddTweetActionPayload } from "src/core/actions/asynchronous/AddTweetAction";
import { DeleteTweetActionPayload } from "src/core/actions/asynchronous/DeleteTweetAction";
import { GetTweetListActionPayload } from "src/core/actions/asynchronous/GetTweetListAction";
import { LikeTweetActionPayload } from "src/core/actions/asynchronous/LikeTweetAction";
import { ModifyTweetContentPayload } from "src/core/actions/asynchronous/ModifyTweetContent";
import { Commentary } from "src/core/entities/Commentary";
import { Tweet } from "../../entities/Tweet";

export interface TweetRepository {
    getList(payload: GetTweetListActionPayload): Promise<Tweet[]>;
    likeTweet(payload: LikeTweetActionPayload): Promise<number>;
    saveTweet(payload: AddTweetActionPayload): Promise<Tweet>;
    deleteTweet(payload: DeleteTweetActionPayload): Promise<string>;
    updateTweet(payload: ModifyTweetContentPayload):Promise<Tweet>;
    saveCommentary(payload: AddCommentaryPayload): Promise<Commentary>;
}