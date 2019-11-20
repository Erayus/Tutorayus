import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import { MDBBtn } from "mdbreact";
import Question from "../../components/question/question";
import classes from "./Survey.module.css";

class Survey extends Component {
    state = {
        surveyingSchool: null,
        questions: [
            {
                id: "1",
                title: 'Did you have fun today?',
                type: 'yesno'
            },
            {
                id: "2",
                title: 'Did you learn something new today?',
                type: 'yesno'
            },
            {
                id: "3",
                title: "Do you love today's challenges?",
                type: 'yesno'
            }
        ],
        curQuestionIndex: 0
    }

    componentDidMount = () => {
        const surveyingSchool = this.props.match.params.surveyingSchool;
        this.setState({surveyingSchool: surveyingSchool})
    }
    backToSchoolSelection = () => {
        this.props.history.replace('/')
    }
    onQuestionAnswered = (id, response) => {
        console.log(id + ": " + response)
        if (this.state.curQuestionIndex < this.state.questions.length - 1){
            this.setState({curQuestionIndex: this.state.curQuestionIndex + 1})
        }
    }

    render(){
    let displayingQuestion = <Question
                                id={this.state.questions[this.state.curQuestionIndex].id}
                                type={this.state.questions[this.state.curQuestionIndex].type}
                                responsed={(id, response) => this.onQuestionAnswered(id, response)}
                            >
                                {this.state.questions[this.state.curQuestionIndex].title}
                            </Question>
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
                        onClick={this.backToSchoolSelection} >
                        <i className="fa fa-arrow-circle-o-left" style={{"marginRight": "5px", "fontSize": '18px'}}aria-hidden="true"></i> 
                        School Selection
                    </MDBBtn>
                    <h2 style={{"fontWeight": "bold"}}>{this.state.surveyingSchool}</h2>
                </div>
                
                <div className={classes.SurveyBody}>
                    {displayingQuestion} 
                </div>
            </WhiteBox>
        )  
    }
}

export default Survey;