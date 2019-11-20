import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import { MDBBtn } from "mdbreact";
import Question from "../../components/question/question";


class Survey extends Component {
    state = {
        surveyingSchool: null
    }

    componentDidMount = () => {
        const surveyingSchool = this.props.match.params.surveyingSchool;
        this.setState({surveyingSchool: surveyingSchool})
    }
    backToSchoolSelection = () => {
        this.props.history.replace('/')
    }
    render(){
        return (
            <WhiteBox>
                <div style={{borderBottom: '1px solid grey', padding: '20px 10px'}}>
                    <MDBBtn 
                        outline
                        color="primary"
                        style={{
                            "left": "30px",
                            "position": "fixed",
                        }}
                        onClick={this.backToSchoolSelection}  >
                        <i className="fa fa-arrow-circle-o-left" style={{"marginRight": "5px", "fontSize": '18px'}}aria-hidden="true"></i> 
                        School Selection
                    </MDBBtn>
                    <h2>{this.state.surveyingSchool}</h2>
                </div>
                
                <div>
                    <Question type="yesno">Did you have fun today?</Question>    
                </div>
            </WhiteBox>
        )  
    }
}

export default Survey;