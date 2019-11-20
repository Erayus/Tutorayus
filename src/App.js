import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom' ;
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
