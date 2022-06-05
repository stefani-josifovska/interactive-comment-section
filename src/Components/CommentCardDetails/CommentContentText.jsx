import React from "react";
import classes from "./CommentContentText.module.css";

const CommentContentText = props => {
  return (
    <div className={classes["comment-text"]}>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default CommentContentText;
