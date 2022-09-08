export interface Repository {
    getNewsFeedData(): Promise<string>
}