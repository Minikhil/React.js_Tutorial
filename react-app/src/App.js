import React, { Component } from 'react';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium';
import './App.css';


class App extends Component {
  state = {
    persons: [{ id: '1', name: 'Nikhil', age: 21}, {id: '2',name: 'Sai', age: 22}, {id: '3',name: 'Toby', age: 23}],
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    // console.log("switchNameHandler runnig ");
    this.setState({persons: [{name: newName, age: 21}, {name: 'Sai', age: 101}, {name: 'Toby', age: 99}]})

  }
  nameChangedHandler = (event, id) =>{
    //checks if you got the right personIndex
    const personIndex = this.state.persons.findIndex(p => {return p.id === id});

    // creates a obj with the specific person name and age
    const person = {
      ...this.state.persons[personIndex]
    };

    // creates a copy of the obj of arrays
    const persons = [...this.state.persons];

    //updates the specific obj in the array of objs
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  togglePersonHandler  = (event) =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  deletePersonHandler  = (personIndex) =>{
    const newPersons = this.state.persons;
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});

  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer', ':hover':{backgroundColor: 'lightgreen', color: 'black'}
    };

    const classes = [];

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((p, index) =>{return <Person name = {p.name} age={p.age} key={p.id} changed={(event) => this.nameChangedHandler(event, persons.id)} click={() => this.deletePersonHandler(index)}  />})}
        </div>

      );
      // style.backgroundColor = 'red';

      classes.push('red'); // adding class declared in App.css
      style[':hover'] = {backgroundColor: 'lightblue', color: 'black'};

    }
    else{
      classes.push('bold'); // adding class declared in App.css
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1 className={classes.join('')}> My React App! </h1>
        //use join when more than one class in classes array
        <button onClick ={this.switchNameHandler.bind(this, "Dan")}> Switch Name </button>
        <button onClick ={this.togglePersonHandler} style={style}> Toggle Name </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
