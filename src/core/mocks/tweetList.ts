import { Tweet } from "src/core/entities/Tweet";

export const tweetList: Tweet[] = [
    {
        comments: [], content: "hello world", 
        tweetos: {
            username: "Elon Musk",
            email: "elonmusk@gmail.com", 
            avatar: "http://localhost/avatars/elonMusk.png"
        },
        likes: 0,
        id: "12345"
    },
    {
        comments: [], content: "Hé salut !!", 
        tweetos: {
            username: "Gaston Lagaffe",
            email: "gastonlagaffe@gmail.com", 
            avatar: "http://localhost/avatars/gastonlagaffe.png"
        },
        likes: 0,
        id: "678901"
    }
]