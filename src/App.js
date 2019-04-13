import React, { Component } from 'react';
import './App.css';
import Kanban from './containers/Kanban';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kanban />
      </div>
    );
  }
}

export default App;
