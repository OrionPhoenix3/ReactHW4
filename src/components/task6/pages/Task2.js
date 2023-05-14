import React from "react";
import WrappedUsersList from '../../task2/UsersList';
import WrappedAlbumsList from '../../task2/AlbumsList';

const Task2 = () => {
    return(
        <div className="task2">
            <WrappedUsersList/>
            <br/>
            <WrappedAlbumsList />
        </div>
    )
}

export default Task2