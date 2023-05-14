import React, {Component} from "react";
import {Route, Routes} from "react-router";
import {Header} from "../pages/Header";
import {Main} from "../pages/Main";
import Task1 from "../pages/Task1"
import Task2 from "../pages/Task2"
import Task3 from "../../task3/Task3"
import { ProductCardList } from '../../task4/ProductCardList';
import Task5 from "../../task5/Task5";
import Details from "../pages/Details";

export default class RouterApp extends Component {
    render() {
        return (
            <nav>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/task1" element={<Task1/>}/>
                    <Route path="/task2" element={<Task2/>}/>
                    <Route path="/task3" element={<Task3/>}/>
                    <Route path="/task4" element={<ProductCardList/>}/>
                    <Route path="/task5" element={<Task5/>}/>
                    <Route path="*" element={<Main/>} />
                    <Route path="/details" element={<Details/>}>
                        <Route path=":1" element={<Task1/>}/>
                        <Route path=":2" element={<Task2/>}/>
                        <Route path=":3" element={<Task3/>}/>
                        <Route path=":4" element={<ProductCardList/>}/>
                        <Route path=":5" element={<Task5/>}/>
                    </Route>
                </Routes>
            </nav>
        )
    }
}