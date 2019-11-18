import React, {Component} from 'react';
import classes from "./UserLayout.module.css";

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.schoolSelectionBox= React.createRef();
    }
    state = {
        isSchoolSelected: false
    }

    componentDidMount(){
        const selectedSchool = localStorage.getItem('selectedSchool');
        if (selectedSchool !== "none"){
            this.setState({isSchoolSelected: true})
        }
        this.schoolSelectionBox.current.value = selectedSchool;
    }

    onSelectSchool(event){
        localStorage.setItem('selectedSchool', event.target.value )
    }

    render(){
        let status = "Select a school";
        if (this.state.isSchoolSelected){
            status = "You have selected:"
        }
        return (
            <div className={classes.UserLayout}>
                <div className={classes.schoolSelection}>
                    <h1>Tutoryaus</h1>
                    <h3>{status}</h3>
                    <select onChange={this.onSelectSchool} ref={this.schoolSelectionBox}>
                        <option value="none">Select</option>
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