import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom' ;
import AdminLayout from "./hoc/Admin/AdminLayout";
import UserLayout from "./hoc/User/UserLayout";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={UserLayout}/>
      <Route path= '/admin' component={AdminLayout}/>
    </div>
  );
}

export default App;
