import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import SurveyBtn from "../../components/UI/surveyBtn/surveyBtn";


class Survey extends Component {
    backToSchoolSelection = () => {
        this.props.history.replace('/')
    }
    render(){
        return (
            <WhiteBox>
                <button 
                style={{
                    "left": "30px",
                    "padding": "8px 20px",
                    "position": "fixed",
                }}
                onClick={this.backToSchoolSelection}  
                >
                    <i className="fa fa-arrow-circle-o-left" style={{"margin-right": "5px", "fontSize": '18px'}}aria-hidden="true"></i> 
                    School Selection
                </button>
                
                <h2>Did you have fun today?</h2>
                <SurveyBtn btnType="Negative">No</SurveyBtn>
                <SurveyBtn btnType="Positive">Yes</SurveyBtn>
            </WhiteBox>
        )  
    }
}

export default Survey;