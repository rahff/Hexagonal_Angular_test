import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { SetTweetAction } from "src/core/actions/SetTweetAction";
import { Tweet } from "src/core/entities/Tweet";
import { NewsFeedStore } from "src/core/stores/NewsFeedStore"
import { tweetList } from "src/core/test/tweetList";
import { EffectMock } from "../mocks/EffectMock";
import { NewsFeedSelector } from "./NewsFeedSelector";

describe('NewsFeedSelector', ()=> {

    let store: NewsFeedStore;
    let effect: EffectMock;
    let selector: NewsFeedSelector;

    beforeEach(()=> {
        effect = new EffectMock();
        store = new NewsFeedStore(effect);
        selector = new NewsFeedSelector(store);
    })

    it('should observe the state of the store', ()=> {
        expect(store.getState().tweetList).toEqual([]);
        store.dispatch(new SetTweetAction([...tweetList, ...tweetList, ...tweetList]))
        selector.getTweetList().subscribe((list: Tweet[])=> {
            expect(list).toEqual([...tweetList, ...tweetList, ...tweetList])
        })
    })
})