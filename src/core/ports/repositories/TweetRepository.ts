import { Tweet } from "../../entities/Tweet";

export interface TweetRepository {
    getList(): Promise<Tweet[]>;
    likeTweet(tweetId: string): Promise<number>;
    saveTweet(tweet: Tweet): Promise<Tweet>;
    deleteTweet(tweetId: string): Promise<string>
}