import React, {Component} from 'react';
import classes from "./UserLayout.module.css";

class UserLayout extends Component {
    render(){
        return (
            <div className={classes.UserLayout}>
                <div className={classes.schoolSelection}>
                    <h1>Select a school</h1>
                    <select>
                        <option>Selection</option>
                        <option>St Margaret Primary School</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default UserLayout;