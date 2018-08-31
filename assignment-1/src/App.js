import React, { Component } from 'react';
import UserInput from './UserInput/userInput';
import UserOutput from './UserOutput/userOutput';
import './App.css';

class App extends Component {
  state = {
    name :' Default',
    college:'UB',
    state: 'NY'
  }

  newNameHandler = (event) => {
    this.setState({name: event.target.value})
  }



  render() {
    const style = {
      backgroundColor:'#ffccb3',
      width: '60%',
      padding: '100px',
      margin: '130px',
      border: '2px solid black',
      textAlign: 'center'
    }
    return (
      <div className="App" style = {style}>
        <h1> Assignment 1 </h1>
        <UserOutput username = {this.state.name}  />
        <UserInput username = {this.state.name} click = {this.newNameHandler}/>
      </div>
    );
  }
}

export default App;
