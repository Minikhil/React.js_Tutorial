import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import WithClass from '../hoc/WithClass';


class App extends Component {
  state = {
    persons: [{ id: '1', name: 'Nikhil', age: 21}, {id: '2',name: 'Sai', age: 22}, {id: '3',name: 'Toby', age: 23}],
    showPersons: false,

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


    let persons = null;




    if (this.state.showPersons){
      persons = (

        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>


      );
      // style.backgroundColor = 'red';

      // adding class declared in App.css
      // assignedClasses.push(classes.red);
      // style[':hover'] = {backgroundColor: 'lightblue', color: 'black'};



    }

    return (

      // <div className={classes.App}>
      <WithClass classes = {classes.App} >
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          person = {this.state.persons}
          clicked = {this.togglePersonHandler}
        />
        {persons}

      </WithClass>
      // </div>

    );
  }
}



export default App;
