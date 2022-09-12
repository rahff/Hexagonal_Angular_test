
import { NewsFeedEffect } from "../effects/NewsFeedEffect";
import { NewsFeedStore } from "./NewsFeedStore"
import { FakeObserver } from "../mocks/FakeObserver";
import { TweetRepositoryMockAdapter } from "src/infrastructure/mocks/TweetRepositoryMock";
import { tweetList } from "../mocks/tweetList";
import { DeleteTweetInListAction } from "../actions/synchronous/DeleteTweetInListAction";
import { ModifyTweetInListAction } from "../actions/synchronous/ModifyTweetInList";
import { SetTweetListAction } from "../actions/synchronous/SetTweetListAction";
import { AddTweetInListAction } from "../actions/synchronous/AddTweetInListAction";
import { AddCommentaryInListAction } from "../actions/synchronous/AddCommentaryInListAction";


describe('NewsFeedStore', ()=> {
    let _store: NewsFeedStore;
    let effectService: NewsFeedEffect;
    const tweetRepository = new TweetRepositoryMockAdapter();
    
    beforeEach(()=> {
        effectService = new NewsFeedEffect(tweetRepository);
        _store = new NewsFeedStore(effectService);
        _store.dispatch(new SetTweetListAction(tweetList));
    });

    it('should attach an observer only once time', ()=> {
        const observer = new FakeObserver();
        _store.attach(observer);
        _store.attach(observer);
        expect(_store.getObservers().length).toBe(1);
    });

    it('should set tweet list in news feed state', ()=> {
        _store.dispatch(new SetTweetListAction(tweetList))
        expect(_store.getState().tweetList).toEqual(tweetList);
    });

    it('should add tweet in list in news feed state', ()=> {
        _store.dispatch(new AddTweetInListAction(tweetList[0]))
        expect(_store.getState().tweetList).toEqual([...tweetList, tweetList[0]]);
    });
    
    it("should delete a tweet in state tweet list", ()=> {
        _store.dispatch(new DeleteTweetInListAction(tweetList[0].id));
        expect(_store.getState().tweetList).toEqual([tweetList[1]]);
    })

    it('should modify tweet in list of news feed state', ()=> {
        _store.dispatch(new ModifyTweetInListAction({...tweetList[0], content: "new content"}));
        expect(_store.getState().tweetList[0].content).toEqual("new content");
    })

    it('should add a commentary on a particular tweet', ()=> {
        const commentary = {tweetRef: "678901", authorAvatar: "http://localhost/img/test.png", authorUsername: "Elon Musk", content: "Cool !"}
        _store.dispatch(new AddCommentaryInListAction({commentary: commentary}));
        expect(_store.getState().tweetList[1].comments[0]).toEqual(commentary);
    })
})