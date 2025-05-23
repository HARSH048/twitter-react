import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { memo, useCallback, useState } from "react";
const initialTweet = [
  {
    id: 1,
    content: "this is first tweet",
    likeCount: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    content: "this is second tweet",
    likeCount: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    content: "this is third tweet",
    likeCount: 5,
    createdAt: new Date().toISOString(),
  },
];

const memoisedAddTweet = memo(AddTweet);

export default function Twitter() {
  const [tweets, setTweets] = useState(initialTweet);

  const handleAddTweet = useCallback((text) => {
    const newTweets = [
      ...tweets,
      {
        id: tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0,
        content: text,
        likeCount: Math.floor(Math.random() * 100) + 1,
        createdAt: new Date().toISOString(),
      },
    ];
    setTweets(newTweets);
  }, []);

  const updateTweet = useCallback((text, id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: text } : tweet
      )
    );
  }, []);

  const sortTweets = useCallback(() => {
    const sorted = [...tweets].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log(sorted);
    setTweets(sorted);
  }, []);

  return (
    <>
      <memoisedAddTweet handleAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweet By Created At</button>
      <TweetList tweets={tweets} updateTweet={updateTweet} />
    </>
  );
}
