import { Action } from "../ports/actions/Action";

export interface Effect {
    createEffect(action: Action): Promise<Action>
}