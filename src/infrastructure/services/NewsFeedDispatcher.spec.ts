import { fakeAsync, flushMicrotasks, tick } from "@angular/core/testing";
import { NewsFeedEffect } from "src/core/effects/NewsFeedEffect";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";
import { NewsFeedStore } from "src/core/stores/NewsFeedStore";
import { tweetList } from "src/core/mocks/tweetList";
import { addCommentaryActionName, addTweetActionName, deleteTweetActionName, getTweetListActionName, likeTweetActionName, modifyTweetContentActionName, setTweetListActionName } from "src/shared/constants/actions.names";
import { NewsFeedDispatcher } from "./NewsFeedDispatcher";
import { TweetRepositoryMockAdapter } from "../mocks/TweetRepositoryMock"
import { Tweet } from "src/core/entities/Tweet";
import { AddCommentaryPayload } from "src/core/actions/asynchronous/AddComentaryAction";



describe('NewsFeedDispatcher', ()=>{

    let store: NewsFeedStore;
    let dispatcher: NewsFeedDispatcher;
    const repository: TweetRepository = new TweetRepositoryMockAdapter();
    const effect = new NewsFeedEffect(repository);

    beforeEach(fakeAsync(()=>{
        store = new NewsFeedStore(effect);
        dispatcher = new NewsFeedDispatcher(store);
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
    }));

   
    it('should get the tweet list', fakeAsync(async ()=> {
        dispatcher.dispatch(getTweetListActionName, null)
        flushMicrotasks();
        const expectedResult = await repository.getList({tweetosId: "1234"});
        expect(store.getState().tweetList).toEqual(expectedResult);
    }));

    it('should increment like of first tweet', fakeAsync(()=>{
        dispatcher.dispatch(likeTweetActionName, {tweetId: "12345"});
        flushMicrotasks();
        expect(store.getState().tweetList[0].likes).toBe(1);
        dispatcher.dispatch(likeTweetActionName, {tweetId: "12345"});
        flushMicrotasks();
        expect(store.getState().tweetList[0].likes).toBe(2);
    }));

    it('should add a tweet in list', fakeAsync(()=> {
        const tweet: Tweet = {comments: [], content: "I feel good", id: "23456", likes: 0, tweetos: { username: "Thiey Henry", email: "thierryhenry@gmail.com", avatar: "http://localhost/img/thierry.png"} }
        dispatcher.dispatch(addTweetActionName, {tweet});
        flushMicrotasks();
        expect(store.getState().tweetList[2]).toEqual(tweet);
    }))

    it("should delete a tweet", fakeAsync(async ()=> {
        dispatcher.dispatch(deleteTweetActionName, {tweetId: "678901"});
        flushMicrotasks();
        const expectedResult = await repository.getList({tweetosId: "23456"})
        expect(store.getState().tweetList).toEqual([expectedResult[0]])
    }));

    it("should modify a tweet content", fakeAsync(()=>{
        dispatcher.dispatch(modifyTweetContentActionName, {tweetId: "12345", update: {content: "new content async"}});
        flushMicrotasks();
        expect(store.getState().tweetList[0].content).toEqual("new content async")
    }))

    it('should add a commentary', fakeAsync(()=> {
        const payload: AddCommentaryPayload = { tweetosRef: "12345678", content: "Cool Raoul !", tweetRef: "678901" }
        dispatcher.dispatch(addCommentaryActionName, payload);
        flushMicrotasks();
        expect(store.getState().tweetList[1].comments[0].content).toEqual("Cool Raoul !");
    }))
})