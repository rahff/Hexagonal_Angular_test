import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Observer, StoreSubject } from "../../core/abstraction/Observer";
import { NewsFeedStore } from "../../core/store/NewsFeedStore";

@Injectable({
    providedIn: "root"
})
export class SelectorService implements Observer {

    private test$: BehaviorSubject<string> = new BehaviorSubject<string>(this.store.getState().test);

    constructor(private store: NewsFeedStore){
        this.store.attach(this);
    }

    update(): void {
        const update = this.store.getState().test;
        this.test$.next(update);
    }

    getTestValue(): Observable<string> {
        return this.test$.asObservable();
    }

}