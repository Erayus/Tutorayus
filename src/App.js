import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' ;
import AdminLayout from "./hoc/Admin/AdminLayout";
import UserLayout from "./hoc/User/UserLayout";

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path= '/admin' exact component={AdminLayout}/>
          <Route path='/' component={UserLayout}/>
        </Switch>
      
      </div>
    );
  }
 
}

export default App;
