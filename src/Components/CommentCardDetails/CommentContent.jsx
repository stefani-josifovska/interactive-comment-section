import React from 'react';
import classes from './CommentContent.module.css';
import CommentContentText from './CommentContentText';
import CommentContentUser from './CommentContentUser';

const CommentContent = props => {
    return (
        <div className={classes['comment-content-container']}>
            <CommentContentUser username={props.username} />
            <CommentContentText text={props.text} />
        </div>
    )
}

export default CommentContent;