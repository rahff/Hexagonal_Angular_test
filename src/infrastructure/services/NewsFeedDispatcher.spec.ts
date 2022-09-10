import { fakeAsync, flushMicrotasks, tick } from "@angular/core/testing";
import { NewsFeedEffect } from "src/core/effects/NewsFeedEffect";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";
import { NewsFeedStore } from "src/core/stores/NewsFeedStore";
import { tweetList } from "src/core/mocks/tweetList";
import { addTweetActionName, deleteTweetActionName, getTweetListActionName, likeTweetActionName, setTweetListActionName } from "src/shared/constants/actions.names";
import { NewsFeedDispatcher } from "./NewsFeedDispatcher";
import { TweetRepositoryMockAdapter } from "../mocks/TweetRepositoryMock"
import { Tweet } from "src/core/entities/Tweet";



describe('NewsFeedDispatcher', ()=>{

    let store: NewsFeedStore;
    let dispatcher: NewsFeedDispatcher;
    const repository: TweetRepository = new TweetRepositoryMockAdapter();
    const effect = new NewsFeedEffect(repository);

    beforeEach(()=>{
        store = new NewsFeedStore(effect);
        dispatcher = new NewsFeedDispatcher(store);
    });

   
    it('should get the tweet list', fakeAsync(()=> {
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
        expect(store.getState().tweetList).toEqual(tweetList);
    }));

    it('should increment like of first tweet', fakeAsync(()=>{
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
        dispatcher.dispatch(likeTweetActionName, "12345");
        flushMicrotasks();
        expect(store.getState().tweetList[0].likes).toBe(1);
        dispatcher.dispatch(likeTweetActionName, "12345");
        flushMicrotasks();
        expect(store.getState().tweetList[0].likes).toBe(2);
    }));

    it('should add a tweet in list', fakeAsync(()=> {
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
        const tweet: Tweet = {comments: [], content: "I feel good", id: "23456", likes: 0, tweetos: { username: "Thiey Henry", email: "thierryhenry@gmail.com", avatar: "http://localhost/img/thierry.png"} }
        dispatcher.dispatch(addTweetActionName, tweet);
        flushMicrotasks();
        expect(store.getState().tweetList).toEqual([...tweetList, tweet]);
    }))

    it("should delete a tweet", fakeAsync(()=> {
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
        dispatcher.dispatch(deleteTweetActionName, "678901");
        flushMicrotasks();
        expect(store.getState().tweetList).toEqual([tweetList[0]])
    }))
})