import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom' ;
import AdminLayout from "./hoc/Admin/AdminLayout";
import UserLayout from "./hoc/User/UserLayout";

class App extends Component {
  componentDidMount = () =>{
    console.log(this.props);
    if (this.props.location.pathname == '/'){
      this.props.history.push('user')
    }
  }
  render(){
    return (
      <div className="App">
        <Route path='/user' component={UserLayout}/>
        <Route path= '/admin' exact component={AdminLayout}/>
      </div>
    );
  }
 
}

export default withRouter(App);
