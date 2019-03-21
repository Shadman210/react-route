import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[
        {id : 1, title: 'BYE', body: 'Buy Some Milk'},
        {id : 2, title: 'Drink', body: 'Drink some tea'},
        {id : 3, title: 'Eat', body: 'Eat some snakes'},
      ]
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path = '/' 
              component = {props=> {return <Home tasks = {this.state.tasks}/>}}/> 
              <Route exact path = '/about' component = {About}/> 
              <Route exact path = '/contact' component = {Contact}/> 

          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
