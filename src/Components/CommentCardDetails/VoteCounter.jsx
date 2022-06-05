import React, { useState } from "react";
import classes from "./VoteCounter.module.css";
import plusSign from "../../images/icon-plus.svg";
import minusSign from "../../images/icon-minus.svg";

const VoteCounter = (props) => {
  const [votesNumber, setVotesNumber] = useState(props.votes);

  const plusSignHandler = () => {
    setVotesNumber(votesNumber + 1);
    props.changeVoteCount(props.id, votesNumber + 1);
  };

  const minusSignHandler = () => {
    // if (votesNumber >= 1) {
    setVotesNumber(votesNumber - 1);
    props.changeVoteCount(props.id, votesNumber - 1);
    // }
  };

  return (
    <div className={classes["vote-count-container"]}>
      <div className={classes["click-container"]} onClick={plusSignHandler}>
        <img src={plusSign} alt="" className={classes["plus-minus-sign"]} />
      </div>
      <h6 className={classes["number-votes"]}>{votesNumber}</h6>
      <div className={classes["click-container"]} onClick={minusSignHandler}>
        <img src={minusSign} alt="" className={classes["plus-minus-sign"]} />
      </div>
    </div>
  );
};

export default VoteCounter;
