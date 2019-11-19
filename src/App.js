import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom' ;
import AdminLayout from "./hoc/Admin/AdminLayout";
import UserLayout from "./hoc/User/UserLayout";

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Route path='/' component={UserLayout}/>
        <Route path= '/admin' exact component={AdminLayout}/>
      </div>
    );
  }
 
}

export default App;
