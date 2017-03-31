import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import factory from "./personFactory";

 ReactDOM.render(
    <App persons={factory.getPersons()} />,document.getElementById('root')
  );


