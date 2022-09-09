import { Tweet } from "../../entities/Tweet";

export interface TweetRepository {
    getList(): Promise<Tweet[]>
}