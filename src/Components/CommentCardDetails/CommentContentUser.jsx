import React from "react";
import classes from "./CommentContentUser.module.css";
import profilePic from "../../images/avatars/image-amyrobson.png";

const CommentContentUser = props => {
  return (
    <div className={classes["comment-user"]}>
      <div className={classes["avatar-name-date"]}>
        <img src={profilePic} alt="" className={classes["profile-pic"]} />
        <p className={classes["username"]}>{props.username}</p>
        <p>1 month ago</p>
      </div>
      <button className={classes["reply-img-div"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes["reply-img"]}
        >
          <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
        </svg>
        <h3>Reply</h3>
      </button>
    </div>
  );
};

export default CommentContentUser;
