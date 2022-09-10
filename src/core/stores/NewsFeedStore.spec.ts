
import { NewsFeedEffect } from "../effects/NewsFeedEffect";
import { NewsFeedStore } from "./NewsFeedStore"
import { FakeObserver } from "../mocks/FakeObserver";
import { TweetRepositoryMockAdapter } from "src/infrastructure/mocks/TweetRepositoryMock";
import { SetTweetListAction } from "../actions/SetTweetListAction";
import { tweetList } from "../mocks/tweetList";
import { AddTweetInListAction } from "../actions/AddTweetInListAction";
import { DeleteTweetInListAction } from "../actions/DeleteTweetInListAction";


describe('NewsFeedStore', ()=> {
    let store: NewsFeedStore;
    let effectService: NewsFeedEffect;
    const tweetRepository = new TweetRepositoryMockAdapter();
    
    beforeEach(()=> {
        effectService = new NewsFeedEffect(tweetRepository);
        store = new NewsFeedStore(effectService);
    });

    it('should attach an observer only once time', ()=> {
        const observer = new FakeObserver();
        store.attach(observer);
        store.attach(observer);
        expect(store.getObservers().length).toBe(1);
    });

    it('should set tweet list in news feed state', ()=> {
        store.dispatch(new SetTweetListAction(tweetList))
        expect(store.getState().tweetList).toEqual(tweetList);
    });

    it('should add tweet in list in news feed state', ()=> {
        store.dispatch(new SetTweetListAction(tweetList));
        store.dispatch(new AddTweetInListAction(tweetList[0]))
        expect(store.getState().tweetList).toEqual([...tweetList, tweetList[0]]);
    });
    
    it("should delete a tweet in state tweet list", ()=> {
        store.dispatch(new SetTweetListAction(tweetList));
        store.dispatch(new DeleteTweetInListAction(tweetList[0].id));
        expect(store.getState().tweetList).toEqual([tweetList[1]]);
    })

})