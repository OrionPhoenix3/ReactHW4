import React, {useEffect, useState} from "react";
import { withToggler } from "../HOC/withToggler";

const User = ({toggledBtn, changeToggled}) => {
    const [users, setUsers] = useState([]);

    const changeText = (e) => {
        if (toggledBtn === false) {   
            document.getElementById(e).innerText  = 'Show it'; 
        } else if (toggledBtn === true) {
            document.getElementById(e).innerText = 'Hide it'; 
        }
    }

    const handleShow = (id) => {
        if (toggledBtn === true) {   
            document.getElementById(id).className = 'info-long__shown';
        } else if (toggledBtn === false) {
            document.getElementById(id).className ='info-long__hidden'; 
        }
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => setUsers(result));
    },[]);

    return (
        <div>
            {users.map((user) => 
            <div key={user.id} className="users-container">
            <div className="info-short">
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
            <button className="btn" id={user.id} onClick={() => {
                const e = user.id;
                const id = `info${e}`
                changeToggled(e);
                changeText(e);
                handleShow(id)
            }}>Show it</button>
            <div id={'info' + user.id} className="info-long__default">
                <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p>Contacts: {user.phone}</p>
                <p>Company: {user.company.name}</p>
            </div>
            </div>
            )}
        </div>
    )
};

const WrappedUser = withToggler(User)

export default WrappedUser
