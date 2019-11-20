import React, {Component} from 'react';
import classes from "./UserLayout.module.css";
import {Route} from 'react-router-dom' ;
import SchoolSelection from '../../containers/SchoolSelection/SchoolSelection';
import Survey from '../../containers/Survey/Survey';

class UserLayout extends Component {
    // constructor(props) {
    //     super(props);
    //     this.schoolSelectionBox= React.createRef();
    // }
    // state = {
    //     isSchoolSelected: false
    // }


    componentDidMount(){
        // const selectedSchool = localStorage.getItem('selectedSchool');
        // if (selectedSchool !== "none"){
        //     this.setState({isSchoolSelected: true})
        // }
        // this.schoolSelectionBox.current.value = selectedSchool;
        console.log(this.props.history.location.pathName)
    }
    // onSelectSchool = (event) => {
    //     localStorage.setItem('selectedSchool', event.target.value );
    //     if (event.target.value !== "none"){
    //         this.setState({isSchoolSelected: true})
    //     } else {
    //         this.setState({isSchoolSelected: false})
    //     }
    // }

    render(){
        // let status = "Select a school";
        // let continueBtn = null;
        // if (this.state.isSchoolSelected){
        //     status = "You have selected:";
        //     continueBtn =  <button> Start Survey </button>;
        // }
        return (
            <div className={classes.UserLayout}>
                {/* <div className={classes.schoolSelection}>
                    <h1>Tutoryaus</h1>
                    <h3>{status}</h3>
                    <select onChange={this.onSelectSchool} ref={this.schoolSelectionBox}>
                        <option value="none">Select</option>
                        <option value="St Margaret Primary School">St Margaret Primary School</option>
                        <option value="Gardenvale Primary School">Gardenvale Primary School</option>
                        <option value="Geelong Grammar Primary School">Geelong Grammar Primary School</option>
                    </select>
                    {continueBtn}
                </div> */}
                <Route path="/" exact component={SchoolSelection} />
                <Route path="/survey/:surveyingSchool" component={Survey} />
            </div>
        )
    }
}

export default UserLayout;