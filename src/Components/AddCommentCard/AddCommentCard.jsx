import React from "react";
import classes from "./AddCommentCard.module.css";
import Button from "../../UI/Button";
import avatar from "../../images/avatars/image-juliusomo.png";
import { useState } from "react";

const AddCommentCard = (props) => {
  const [newComment, setNewComment] = useState("");
  const typeCommentHandler = (e) => {
    setNewComment(e.target.value);
  };

  const sendCommentHandler = () => {
    if (newComment.trim().length > 0) {
      props.setData([
        ...props.data,
        {
          id: Math.random(),
          content: newComment,
          username: "juliusomo",
          votes: 0,
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className={classes["card-wrap"]}>
      <img src={avatar} alt="" className={classes.avatar} />
      <textarea
        onChange={typeCommentHandler}
        placeholder="Add a comment..."
        name=""
        id=""
        value={newComment}
        className={classes["text-area"]}
      ></textarea>
      <Button title="SEND" onClick={sendCommentHandler} />
    </div>
  );
};

export default AddCommentCard;
