import { Injectable } from "@angular/core";
import { AddCommentaryPayload } from "src/core/actions/asynchronous/AddComentaryAction";
import { AddTweetActionPayload } from "src/core/actions/asynchronous/AddTweetAction";
import { DeleteTweetActionPayload } from "src/core/actions/asynchronous/DeleteTweetAction";
import { GetTweetListActionPayload } from "src/core/actions/asynchronous/GetTweetListAction";
import { LikeTweetActionPayload } from "src/core/actions/asynchronous/LikeTweetAction";
import { ModifyTweetContentAction, ModifyTweetContentPayload } from "src/core/actions/asynchronous/ModifyTweetContent";
import { Commentary } from "src/core/entities/Commentary";
import { Tweet } from "src/core/entities/Tweet";
import { tweetList } from "src/core/mocks/tweetList";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";



@Injectable({
    providedIn: "root"
})
export class TweetRepositoryMockAdapter implements TweetRepository {

    private data: Tweet[] = tweetList;

    saveCommentary(payload: AddCommentaryPayload): Promise<Commentary> {
        return new Promise((resolve)=> {
            const commentary: Commentary = {
                authorAvatar: "http://localhost:img/test.png",
                authorUsername: "Elon Musk",
                content: payload.content,
                tweetRef: payload.tweetRef
            }
            resolve(commentary);
        });
    }


    updateTweet(payload: ModifyTweetContentPayload): Promise<Tweet> {
       return new Promise((resolve, reject) => {
        const foundedtweet = this.data.filter((t: Tweet)=> t.id === payload.tweetId)[0];
        if(!foundedtweet) reject(new Error("tweet not found"));
        resolve({...foundedtweet, ...payload.update});
       })
    }

    deleteTweet(payload: DeleteTweetActionPayload): Promise<string> {
        return new Promise((resolve)=> resolve(payload.tweetId));
    }

    saveTweet(payload: AddTweetActionPayload): Promise<Tweet> {
        return new Promise((resolve)=> resolve(payload.tweet));
    }


    likeTweet(payload: LikeTweetActionPayload): Promise<number> {
        return new Promise((resolve)=> {
            const tweet = this.data.filter((tweet: Tweet) => tweet.id === payload.tweetId)[0];
            resolve(++tweet.likes)
        })
    }

    getList(payload: GetTweetListActionPayload): Promise<Tweet[]> {
        return new Promise((resolve)=> resolve(this.data));
    }

}