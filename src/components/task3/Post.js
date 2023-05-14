import React from "react";

export const Post = ({post}) => {
    
    return (
        <li className="post">
            <div>{`Title: ${post.title} - completed: ${post.completed}`}</div>
        </li>
    )
}

