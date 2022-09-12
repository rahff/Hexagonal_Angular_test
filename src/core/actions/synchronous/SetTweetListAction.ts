
import { Tweet } from "src/core/entities/Tweet";
import { Action } from "src/core/ports/actions/Action";
import { setTweetListActionName } from "src/shared/constants/actions.names";




export class SetTweetListAction extends Action<Tweet[]> {
   
    constructor(tweetList: Tweet[]){
        super(setTweetListActionName, tweetList);
        this.payload = tweetList;
    }
}