import { Observer } from "src/shared/interfaces/Observer";

export class FakeObserver implements Observer {
    
    update(): void {
        throw new Error("Method not implemented.");
    }

}