export interface Observer {
    update(): void;
}

export interface StoreSubject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}