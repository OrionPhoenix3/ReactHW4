import React from "react";
import {DataMaker} from './DataMaker'
import {Posts} from "./Posts";

const Task3 = () => {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    
    return (
        <div className="task3">
            <DataMaker url={TODOS_URL} renderDataUrl={(data) => <Posts posts={data}/>}/>
        </div>
    )
}

export default Task3