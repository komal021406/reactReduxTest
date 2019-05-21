import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";


import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CoursePage from './components/Courses/CoursePage';
import ManageCoursePage from './components/Courses/ManageCoursePage';
import './App.css';
import Header from './components/shared/Header';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render(){
  
  return (
    
    <div className="App">
   <Header/>
      <Switch>
    <Route exact path = "/" component ={HomePage}/>
    <Route path = "/About" component ={AboutPage}/>
    <Route path = "/Courses" component ={CoursePage}/>
    <Route path="/course/:slug" component={ManageCoursePage} /> 
     <Route path="/course" component={ManageCoursePage} /> 
    </Switch>
  
     
      </div>
  );
}
}
export default App;
