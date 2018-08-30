import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';


class App extends Component {
  state = {
    persons: [{name: 'Nikhil', age: 21}, {name: 'Sai', age: 22}, {name: 'Toby', age: 23}]
  }

  switchNameHandler = (newName) =>{
    // console.log("switchNameHandler runnig ");
    this.setState({persons: [{name: newName, age: 21}, {name: 'Sai', age: 101}, {name: 'Toby', age: 99}]})

  }
  nameChangedHandler = (event) =>{
    this.setState({persons: [{name: event.target.value, age: 21}, {name: 'Sai', age: 101}, {name: 'Toby', age: 99}]})

  }
  render() {
    return (
      <div className="App">
        <h1> My React App! </h1>
        <Person
        name ={this.state.persons[0].name}
        age ={this.state.persons[0].age}
        changed = {this.nameChangedHandler}
        />
        <Person
        name ={this.state.persons[1].name}
        age ={this.state.persons[1].age}
        />
        <Person
        name ={this.state.persons[2].name}
        age ={this.state.persons[2].age}
        click = {this.switchNameHandler}
        />
        <button onClick ={this.switchNameHandler.bind(this, "Dan")}> Switch Name </button>

      </div>
    );
  }
}

export default App;
