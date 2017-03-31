import React from 'react';
let {Component} = React;
import PersonTable from "./PersonTable";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, whit these data</p>          
          <PersonTable/>
        </div>
      </div>
    );
  }
}

export default App;
