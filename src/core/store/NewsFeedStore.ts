import { Observer, StoreSubject } from "../abstraction/Observer";
import { Repository } from "../abstraction/Repository";
import { Action } from "../actions/Action";
import { Effect } from "../effects/Effect";
import { Reducer } from "../reducers/Reducer";

export interface NewsFeedState {
    test: string
}

export class NewsFeedStore implements StoreSubject{

    private effects!: Effect;
    private _subscriber: any[] = []
    private state: NewsFeedState = {
        test: "initial value"
    };
    
    constructor(private reducer: Reducer, private repository: Repository){
        this.effects = new Effect(this.repository);

    }

    attach(observer: Observer): void {
        if(this._subscriber.includes(observer)) return;
        this._subscriber.push(observer);
    }

    detach(observer: Observer): void {
        throw new Error("Method not implemented.");
    }

    notify(): void {
        this._subscriber.forEach((observer: Observer)=>{
            observer.update();
        });
    }

    dispatch(action: Action){
        try {
            this.state = this.reducer.reduceState(this.state, action)
            this.notify();
        } catch (error: any) {
           this.dispatchAsync(action);
        }
    }

    async dispatchAsync(action: Action): Promise<void> {
        const asyncAction = await this.effects.createAction(action);
        this.dispatch(asyncAction);     
    }

    getState(): NewsFeedState {
        return this.state;
    }
}