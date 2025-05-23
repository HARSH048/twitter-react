import Tweet from "./Tweet"
import '../CSS/TweetList.css'
import { memo } from "react"

const MemoisedTweet = memo(Tweet)
export default function TweetList({tweets,updateTweet}){
    return (
        <ul className="tweet-list">
            {tweets.map((tweet)=>(
                <li key={tweet.id}>
                    <MemoisedTweet likeCount={tweet.likeCount} content={tweet.content} createdAt={tweet.createdAt} updateTweet={updateTweet} id={tweet.id}/>
                </li>
            ))}
        </ul>
    )
}