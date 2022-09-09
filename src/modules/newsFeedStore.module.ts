import { NgModule } from "@angular/core";
import { Effect } from "src/core/effects/Effect";
import { NewsFeedEffect } from "src/core/effects/NewsFeedEffect";
import { TweetRepository } from "src/core/ports/repositories/TweetRepository";
import { NewsFeedStore } from "src/core/stores/NewsFeedStore";
import { TweetRepositoryAdapter } from "src/infrastructure/adapters/TweetRepositoryAdapter";



@NgModule({
    providers: [
        {
            provide: NewsFeedEffect, useFactory: (r: TweetRepository)=> new NewsFeedEffect(r),
            deps: [TweetRepositoryAdapter]
        },
        {
            provide: NewsFeedStore, useFactory: (e: Effect)=> new NewsFeedStore(e),
            deps: [NewsFeedEffect]
        }
    ]
})
export class NewsFeedStoreModule {}