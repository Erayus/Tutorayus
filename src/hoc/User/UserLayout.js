import React, {Component} from 'react';
import classes from "./UserLayout.module.css";
import {Route} from 'react-router-dom' ;
import SchoolSelection from '../../containers/SchoolSelection/SchoolSelection';
import Survey from '../../containers/Survey/Survey';

class UserLayout extends Component {



    componentDidMount(){
      
    }


    render(){
  
        return (
            <div className={classes.UserLayout}>
                
                <Route path="/" exact component={SchoolSelection} />
                <Route path="/survey/:surveyingSchool" component={Survey} />
            </div>
        )
    }
}

export default UserLayout;