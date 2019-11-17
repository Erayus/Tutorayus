import React, {Component} from 'react';
import classes from "./UserLayout.module.css";

class UserLayout extends Component {

    onSelectSchool(event){
        localStorage.setItem('selectedSchool', event.target.value )
    }

    render(){
        return (
            <div className={classes.UserLayout}>
                <div className={classes.schoolSelection}>
                    <h1>Select a school</h1>
                    <select onChange={this.onSelectSchool}>
                        <option value="none">Selection</option>
                        <option value="St Margaret Primary School">St Margaret Primary School</option>
                        <option value="Gardenvale Primary School">Gardenvale Primary School</option>
                        <option value="Geelong Grammar Primary School">Gardenvale Primary School</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default UserLayout;