import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";


import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CoursePage from './components/Courses/CoursePage';
import './App.css';
import Header from './components/shared/Header';

class App extends Component {
  render(){
  
  return (
    
    <div className="App">
   <Header/>
      <Switch>
    <Route exact path = "/" component ={HomePage}/>
    <Route path = "/About" component ={AboutPage}/>
    <Route path = "/Courses" component ={CoursePage}/> 
    </Switch>
  
     
      </div>
  );
}
}
export default App;
