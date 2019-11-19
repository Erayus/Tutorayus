import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import SurveyBtn from "../../components/UI/surveyBtn/surveyBtn";

class Survey extends Component {
    render(){
        return (
            <WhiteBox>
                <h2>Did you have fun today?</h2>
                <SurveyBtn btnType="Negative">No</SurveyBtn>
                <SurveyBtn btnType="Positive">Yes</SurveyBtn>
            </WhiteBox>
        )  
    }
}

export default Survey;