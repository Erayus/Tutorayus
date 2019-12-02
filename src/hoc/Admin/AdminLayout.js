import React, {Component} from 'react';
import Chart from '../../components/Chart/Chart';
import classes from './AdminLayout.module.css';

class AdminLayout extends Component {
    render(){
        return (
            <div className={classes.AdminLayout}>
                <Chart 
                    questionTitle="Question Title"
                    noOfYes={30}
                    noOfNo={70} />
            </div>
        )
    }
}

export default AdminLayout;