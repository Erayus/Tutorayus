import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import { MDBBtn } from "mdbreact";
import Question from "../../components/question/question";
import classes from "./Survey.module.css";

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
                <div className={classes.SurveyHead}>
                    <MDBBtn 
                        outline
                        color="primary"
                        style={{
                            "left": "10px",
                            "top": "5px",
                            "position": "fixed",
                        }}
                        onClick={this.backToSchoolSelection}  >
                        <i className="fa fa-arrow-circle-o-left" style={{"marginRight": "5px", "fontSize": '18px'}}aria-hidden="true"></i> 
                        School Selection
                    </MDBBtn>
                    <h2 style={{"fontWeight": "bold"}}>{this.state.surveyingSchool}</h2>
                </div>
                
                <div className={classes.SurveyBody}>
                    <Question type="yesno">Did you have fun today?</Question>    
                </div>
            </WhiteBox>
        )  
    }
}

export default Survey;