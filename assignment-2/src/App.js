import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/validation';
import Charr from './Charr/charr'




class App extends Component {
  state =  {
    userInput: '',
    userInputLength: null
  }

  inputHandler = (event) =>{
    this.setState({userInput: event.target.value, userInputLength: event.target.value.length});
    // return console.log(this.state.userInput.length);
  }

  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split(''); // convert str to array of char using split method
    text.splice(index,1); // take out the char from array
    const newText = text.join(''); // convert the array back to str
    this.setState({userInput: newText});  // update the state




  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {

        return <Charr character={ch} key={index} clicked = {() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
      <h1> Assignment 2 </h1>
      <input type="text" onChange = {this.inputHandler} value = {this.state.userInput}/>
      <p> {this.state.userInput}</p>
      <p> {this.state.userInputLength}</p>
      <Validation textLength={this.state.userInput.length} />
      {charList}






      </div>
    );
  }
}

export default App;
