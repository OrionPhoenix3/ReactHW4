import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./components/task6/router/RouterApp";
import './styles/index.css';
import './styles/Task1.css';
import './styles/Task2.css';
import './styles/Task3.css';
import './styles/Task4.css';
import './styles/Task6.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RouterApp></RouterApp>
    </Router>
  </React.StrictMode>
);
