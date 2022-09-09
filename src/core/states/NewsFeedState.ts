import { Tweet } from "src/core/entities/Tweet";
import { State } from "src/core/ports/api/Store";

export interface NewsFeedState extends State{
    tweetList: Tweet[];
}