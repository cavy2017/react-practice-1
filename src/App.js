import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Special test name"
  };

  inputChangeHandler = (event) => {
    this.setState({username: event.target.value})
  };

  render() {

    return (
      <div className="App">
        <UserInput 
          name={this.state.username}
          changed={this.inputChangeHandler} />
        <UserOutput username="Oksana"/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="Olga"/>
      </div>
    );
  }
}

export default App;
