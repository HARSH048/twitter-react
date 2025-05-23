import Tweet from "./Tweet"
import '../CSS/TweetList.css'
import { memo } from "react"

const memoisedTweet = memo(tweet)
export default function TweetList({tweets,updateTweet}){
    return (
        <ul className="tweet-list">
            {tweets.map((tweet)=>(
                <li key={tweet.id}>
                    <memoisedTweet likeCount={tweet.likeCount} content={tweet.content} createdAt={tweet.createdAt} updateTweet={updateTweet} id={tweet.id}/>
                </li>
            ))}
        </ul>
    )
}