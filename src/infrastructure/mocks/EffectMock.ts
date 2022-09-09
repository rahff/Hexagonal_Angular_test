
import { Effect } from "src/core/effects/Effect";
import { Action } from "src/core/ports/actions/Action";
import { FakeAction } from "./FakeAction";

export class EffectMock implements Effect {

    createEffect(action: Action<any>): Promise<Action<any>> {
        return new Promise((resolve)=> resolve(new FakeAction()));
    }

}