import { fakeAsync, tick } from "@angular/core/testing";
import { NewsFeedEffect } from "../effects/NewsFeedEffect";
import { TweetRepositoryMock } from "../mocks/TweetRepository";
import { GetTweetListAction } from "../actions/GetTweetListAction";
import { SetTweetAction } from "../actions/SetTweetAction";
import { tweetList } from "../test/tweetList";
import { NewsFeedStore } from "./NewsFeedStore"
import { FakeObserver } from "../mocks/FakeObserver";


describe('NewsFeedStore', ()=>{
    let store: NewsFeedStore;
    let effectService: NewsFeedEffect;
    const tweetRepository = new TweetRepositoryMock();
    
    beforeEach(()=> {
        effectService = new NewsFeedEffect(tweetRepository);
        store = new NewsFeedStore(effectService);
    });

    it('should set tweet list in news feed state', ()=> {
        const action = new SetTweetAction(tweetList)
        store.dispatch(action);
        expect(store.getState().tweetList).toEqual(tweetList);
    });

    it('should create an effect to get the tweet list', fakeAsync(()=> {
        const action = new GetTweetListAction();
        store.dispatch(action);
        tick(550);
        expect(store.getState().tweetList).toEqual([...tweetList, ...tweetList]);
    }));

    it('should attach an observer only once time', ()=> {
        const observer = new FakeObserver();
        store.attach(observer);
        store.attach(observer);
        expect(store.getObservers().length).toBe(1)
    })
})