import { Action } from "../ports/actions/Action";
import { TweetRepository } from "../ports/repositories/TweetRepository";
import { ActionFactory } from "../../infrastructure/factories/ActionFactory";
import { getTweetListActionName, setTweetListActionName } from "../../shared/constants/actions.names";
import { Effect } from "./Effect";


export class NewsFeedEffect implements Effect{

    constructor(private TweetRepository: TweetRepository){}

    async createEffect(action: Action): Promise<Action> {
        switch (action.getName()) {
            case getTweetListActionName:
                const tweetList = await this.TweetRepository.getList();
                return ActionFactory.createAction(setTweetListActionName, tweetList);
        
            default: throw new Error("unknow action");
        }
    }
}