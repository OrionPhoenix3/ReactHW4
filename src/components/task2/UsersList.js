import React from "react";
import UserTask2 from "./UserTask2"
import Error from "./Error";
import Loader from "./Loader";
import {withFetchingData} from "../HOC/withFetchingData"

export const USERS_URL = "https://jsonplaceholder.typicode.com/users?_limit=10"

const UsersList = ({data, isLoading, error}) => {
    return (
        error ? <Error text={error}/> : 
            isLoading ? <Loader componentTitle={'UsersList'}/> :
                data.map((user) => 
                    <UserTask2 key={user.id} user={user}/>
                )
    )
}

const WrappedUsersList = withFetchingData(UsersList, USERS_URL)

export default WrappedUsersList



