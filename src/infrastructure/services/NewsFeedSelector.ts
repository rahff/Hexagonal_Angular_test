import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Tweet } from "src/core/entities/Tweet";
import { NewsFeedStore } from "src/core/stores/NewsFeedStore";
import { Observer } from "src/shared/interfaces/Observer";

@Injectable({
    providedIn: "root"
})
export class NewsFeedSelector implements Observer {

    private tweetList$ = new BehaviorSubject<Tweet[]>(this.store.getState().tweetList);

    constructor(private store: NewsFeedStore){
        this.store.attach(this);
    }

    update(): void {
        const state = this.store.getState();
        this.tweetList$.next(state.tweetList);
    }

    getTweetList(): Observable<Tweet[]> {
        return this.tweetList$.asObservable();
    }

}