import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <ul className="nav">
            <li className="nav__li"><NavLink className="nav__link" to="/">Main</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task1">Task1</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task2">Task2</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task3">Task3</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task4">Task4</NavLink></li>
            <li className="nav__li"><NavLink className="nav__link" to="/task5">Task5</NavLink></li>
        </ul>
    )
};