import { Observer } from "../../shared/interfaces/Observer";
import { Effect } from "../effects/Effect";
import { SynchronousActionNotFoundException } from "../exceptions/SynchronousActionNotFoundException";
import { Action } from "../ports/actions/Action";
import { Store } from "../ports/api/Store";
import { NewsFeedReducer } from "../reducers/NewsFeedReducer";
import { NewsFeedState } from "../states/NewsFeedState";

export class NewsFeedStore implements Store{

    private _observers: Observer[] = [];
    private reducer = new NewsFeedReducer();
    private state: NewsFeedState = {
        tweetList: []
    }

    constructor(private effectService: Effect){}

    attach(obsever: Observer): void {
        if(!this._observers.includes(obsever)){
            this._observers.push(obsever);
        }
    }

    notify(): void {
        this._observers.forEach((observer: Observer)=> observer.update());
    }

    dispatch(action: Action): void{
        try {
            this.state = this.reducer.reduceState(this.state, action);
            this.notify();
        } catch (error) {
            if(error instanceof SynchronousActionNotFoundException)
                this.dispatchAsync(action);
            else throw error;
        }
    }
    
    private async dispatchAsync(asyncAction: Action): Promise<void> {
        const action = await this.effectService.createEffect(asyncAction);
        this.dispatch(action);
    }

    getState(): NewsFeedState {
        return this.state;
    }

    getObservers(): Observer[] {
        return this._observers;
    }
}