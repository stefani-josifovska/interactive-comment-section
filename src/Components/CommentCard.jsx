import classes from './CommentCard.module.css';
import React from 'react';
import VoteCounter from './CommentCardDetails/VoteCounter';
import CommentContent from './CommentCardDetails/CommentContent';

const CommentCard = props => {
    const changeVoteCount = (userId, newVotes) => {
        props.changeVoteCount(userId, newVotes);
    }

    return (
        <div className={classes['card-wrap']}>
            <VoteCounter id={props.id} changeVoteCount={changeVoteCount} votes={props.votes} />
            <CommentContent text={props.text} username={props.username} />
        </div>
    );
}

export default CommentCard;