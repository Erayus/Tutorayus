import React, {Component} from 'react';
import axios from '../../axios-survey';

class Report extends Component {
    state = {
        schoolName: null
    }
    componentDidMount(){
        const schoolName = this.props.match.params.schoolName;
        this.setState({schoolName: schoolName})   
        axios.get('/surveys/' + schoolName + '.json').then(
            (res)=> console.log(res.data)
        )
    }
    render(){
        return(
            <div>
                <h3><strong>{this.state.schoolName}</strong></h3>
            </div>
        )
    }
}

export default Report;