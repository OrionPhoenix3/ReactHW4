import React from "react";
import { useToggle } from "../hooks/useToggle";
import { useFetch } from "../hooks/useFetch"
import Loader from "../task2/Loader";
import Error from "../task2/Error";
import {USERS_URL} from "../task2/UsersList"

const UserTask5 = () => {
    const {data: users, loading, error} = useFetch(USERS_URL);
    const {toggler: toggledBtn, changeToggle} = useToggle()

    const changeText = (e) => {
        if (toggledBtn === true) {   
            document.getElementById(e).innerText  = 'Show it'; 
        } else if (toggledBtn === false) {
            document.getElementById(e).innerText = 'Hide it'; 
        }
    }

    return (
        <div>
            {loading && <Loader componentTitle={'UserTask5'}></Loader>}
            {(error && !loading) && <Error text={error}></Error>}
            {(!error && !loading) && 
            users.map((user) => 
            <div key={user.id} className="user-container">
            <div className="info-short">
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
            <button id={user.id} onClick={() => {
                const e = user.id;
                changeToggle();
                changeText(e);
            }}>Show it</button>
            <div className={toggledBtn ? "info-long__shown" : "info-long__hidden"}>
                <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p>Contacts: {user.phone}</p>
                <p>Company: {user.company.name}</p>
            </div>
            </div>
            )}
        </div>
    )
};

export default UserTask5