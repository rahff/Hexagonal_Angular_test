import { Injectable } from "@angular/core";
import { Repository } from "../../core/abstraction/Repository";


@Injectable({
    providedIn: "root"
})
export class Repository1 implements Repository {

    getNewsFeedData(): Promise<string> {
        return new Promise((resolve)=> { 
            setTimeout(() => {
            resolve("Jean a été sage");
        }, 500)
    })

    }
}