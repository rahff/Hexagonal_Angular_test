import { Observer } from "../../../shared/interfaces/Observer";
import { Action } from "../actions/Action";

export interface State {}

export interface Store {
    attach(obsever: Observer): void
    dispatch(action: Action): void
    getState(): State;
    notify(): void
}