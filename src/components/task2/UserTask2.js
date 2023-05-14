import React from "react";

const UserTask2 = ({user}) => {
    return (
        <div className="users-container">
            <p><span className="users-span">Username:</span> {user.username}</p>
            <p><span className="users-span">Email:</span> {user.email}</p>
            <p><span className="users-span">Address:</span> {user.address.city}, {user.address.street}, {user.address.suite}</p>
            <p><span className="users-span">Contacts:</span> {user.phone}</p>
            <p><span className="users-span">Company:</span> {user.company.name}</p>
        </div>
    )
};

export default UserTask2
