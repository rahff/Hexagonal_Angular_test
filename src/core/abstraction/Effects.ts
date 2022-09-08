import { Action } from "../actions/Action";

export interface Effects {
    createEffect(action: Action): Promise<Action>;
}