import { setTweetListActionName } from "../../shared/constants/actions.names";
import { Tweet } from "../entities/Tweet";
import { Action } from "../ports/actions/Action";



export class SetTweetListAction extends Action<Tweet[]> {
   
    constructor(tweetList: Tweet[]){
        super(setTweetListActionName, tweetList);
        this.payload = tweetList;
    }
}