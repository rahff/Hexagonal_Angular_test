import { Injectable } from "@angular/core";
import { Tweet } from "src/core/entities/Tweet";
import { tweetList } from "src/core/mocks/tweetList";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";



@Injectable({
    providedIn: "root"
})
export class TweetRepositoryMockAdapter implements TweetRepository {

    deleteTweet(tweetId: string): Promise<string> {
        return new Promise((resolve)=> resolve(tweetId));
    }

    saveTweet(tweet: Tweet): Promise<Tweet> {
        return new Promise((resolve)=> resolve(tweet));
    }

    private data: Tweet[] = tweetList

    likeTweet(tweetId: string): Promise<number> {
        return new Promise((resolve)=> {
            const tweet = this.data.filter((tweet: Tweet) => tweet.id === tweetId)[0];
            resolve(++tweet.likes)
        })
    }

    getList(): Promise<Tweet[]> {
        return new Promise((resolve)=> resolve(this.data));
    }

}