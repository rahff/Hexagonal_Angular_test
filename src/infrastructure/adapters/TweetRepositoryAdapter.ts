import { Injectable } from "@angular/core";
import { Tweet } from "src/core/entities/Tweet";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";
import { tweetList } from "src/core/test/tweetList";


@Injectable({
    providedIn: "root"
})
export class TweetRepositoryAdapter implements TweetRepository {

    getList(): Promise<Tweet[]> {
        return new Promise((resolve)=> resolve(tweetList));
    }

}