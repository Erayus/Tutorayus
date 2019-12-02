import React, {Component} from 'react';
import Chart from '../../components/Chart/Chart';
import classes from './AdminLayout.module.css';
import SchoolInfo from '../../components/SchoolInfo/SchoolInfo';
import {Route} from 'react-router-dom';

class AdminLayout extends Component {
    render(){
        return (
            <div className={classes.AdminLayout}>
                {/* <Chart 
                    questionTitle="Question Title"
                    noOfYes={30}
                    noOfNo={70} /> */}
                <SchoolInfo 
                    logo="https://upload.wikimedia.org/wikipedia/commons/8/80/GGS_Crest.png"
                    name="Geelong Grammar Primary"
                    location="50 Biddlecombe Ave, Corio VIC 3214"   
                />
            </div>
        )
    }
}

export default AdminLayout;