import { useState } from "react";

export default function AddTweet({handleAddTweet}) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="add new tweet"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={()=>{
        handleAddTweet(text)
        setText("")
      }}>Tweet</button>
    </>
  );
}
