import { NgModule } from "@angular/core";
import { Repository } from "src/core/abstraction/Repository";
import { Effect } from "src/core/effects/Effect";
import { Reducer } from "../core/reducers/Reducer";
import { NewsFeedStore } from "../core/store/NewsFeedStore";
import { Repository1 } from "./repositories/Repository";


@NgModule({
    providers: [
        {
            provide: Effect, useFactory: (r: Repository)=> new Effect(r),
            deps: [Repository1]
        },
        {
            provide: Reducer, useFactory: ()=> new Reducer(),
        },
        {
            provide: NewsFeedStore, useFactory: (reducer: Reducer, effects: Effect)=> new NewsFeedStore(reducer, effects),
            deps: [ Reducer, Effect ]
        },
    ]
})
export class StoreModule {}