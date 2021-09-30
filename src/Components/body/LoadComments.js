import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props =>{
    return(
        props.comments.map(comment =>{
            return(
                <div key={comment.id}>
                    <p><span style={{fontWeight: "600"}}>Ratings:</span> {comment.rating}/5</p>
                    <p><span style={{fontWeight: "600"}}>Feedback:</span> {comment.comment}</p>
                    <p><span style={{fontWeight: "600", fontSize : "14px"}}>User:</span> <strong>{comment.author}</strong><span style={{float: "right", fontSize : "13px"}}>{dateFormat(comment.date, "mmmm d, yyyy")}</span></p>
                    
                </div>
            );
        })
    );
}

export default LoadComments;