import axios from 'axios';
import React from 'react';
import Hello from './components/hello'
import Hello2 from './components/hello2'
import {NavLink, Link, Route} from 'react-router-dom'

class App extends React.Component{

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('success',response.data)},
      error => {console.log('error',error)}
    )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('success',response.data)},
      error => {console.log('error',error)}
    )
  }

  render(){
    return (
      <div>
        <NavLink to="hello1">hello1</NavLink>
        <NavLink to="hello2">hello2</NavLink>
        <Route path='/hello1' activeClassName="active" component={Hello}></Route>
        <Route path='/hello2' component={Hello2}></Route>
        
        
      </div>
    )
  }
}


//默认暴露
export default App;
