import { NgModule } from "@angular/core";
import { Dispatcher } from "src/core/abstraction/Dispathcher";
import { Repository } from "src/core/abstraction/Repository";
import { Effect } from "src/core/effects/Effect";
import { Reducer } from "../core/reducers/Reducer";
import { NewsFeedStore } from "../core/store/NewsFeedStore";
import { Repository1 } from "./repositories/Repository";
import { DispatcherService } from "./services/Dispatcher.service";


@NgModule({
    providers: [
        {
            provide: Reducer, useFactory: ()=> new Reducer(),
        },
        {
            provide: NewsFeedStore, useFactory: (reducer: Reducer, repo: Repository)=> new NewsFeedStore(reducer, repo),
            deps: [ Reducer, Repository1 ]
        },
    ]
})
export class StoreModule {}