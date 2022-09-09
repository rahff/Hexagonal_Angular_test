import { Tweet } from "../entities/Tweet";
import { TweetRepository } from "../ports/repositories/TweetRepository";
import { tweetList } from "../test/tweetList";

export class TweetRepositoryMock implements TweetRepository {

    getList(): Promise<Tweet[]> {
        
        return new Promise((resolve)=> {
            setTimeout(() => {
                resolve([...tweetList, ...tweetList])}, 500);
        });
    }

}