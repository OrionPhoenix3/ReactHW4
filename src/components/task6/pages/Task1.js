import React from "react";
import WrappedAlbum from '../../task1/Albums';
import WrappedUser from '../../task1/User';

const Task1 = () => {
    return(
        <div className="task1">
            <WrappedUser/>
            <br/>
            <WrappedAlbum />
        </div>
    )
}

export default Task1