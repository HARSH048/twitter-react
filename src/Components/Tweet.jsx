import { useState } from "react";
import "../CSS/Tweet.css";

export default function Tweet({ content, likeCount, createdAt, updateTweet, id }) {
  const [isEditting, setEditting] = useState(false);
  const [text, setText] = useState(content);

  return (
    <div className="tweet-wrapper">
      <div className="content-edit-wrapper">
        {!isEditting ? (
          <div className="tweet-content">{content}</div>
        ) : (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        )}
        <button
          onClick={() => {
            if(isEditting && text !== content) {updateTweet(text,id)}
            setEditting(!isEditting)
          }}
          className="edit-button"
        >
          {isEditting ? "Save" : "Edit"}
        </button>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likeCount} likes</div>
        <div className="created-at">Tweet at {createdAt}</div>
      </div>
    </div>
  );
}

// {
//   /* <div className="tweet-content">{content}</div> */
// }
