import { Tweetos } from "./Tweetos";
import { Commentary } from "./Commentary";

export interface Tweet {
    content: string;
    tweetos: Tweetos;
    comments: Commentary[];
    likes: number;
    id: string;
}