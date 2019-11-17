import React, {Component} from 'react';
import classes from "./UserLayout.module.css";

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.schoolSelectionBox= React.createRef();
      }

    componentDidMount(){
        const selectedSchool = localStorage.getItem('selectedSchool');
        this.schoolSelectionBox.current.value = selectedSchool;
    }

    onSelectSchool(event){
        localStorage.setItem('selectedSchool', event.target.value )
    }

    render(){
        return (
            <div className={classes.UserLayout}>
                <div className={classes.schoolSelection}>
                    <h1>Select a school</h1>
                    <select onChange={this.onSelectSchool} ref={this.schoolSelectionBox}>
                        <option value="none">Selection</option>
                        <option value="St Margaret Primary School">St Margaret Primary School</option>
                        <option value="Gardenvale Primary School">Gardenvale Primary School</option>
                        <option value="Geelong Grammar Primary School">Geelong Grammar Primary School</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default UserLayout;