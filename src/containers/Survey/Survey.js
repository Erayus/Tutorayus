import React, {Component} from "react";
import WhiteBox from "../../hoc/whiteBox/whiteBox";
import SurveyBtn from "../../components/UI/surveyBtn/surveyBtn";
import { MDBBtn } from "mdbreact";


class Survey extends Component {
    backToSchoolSelection = () => {
        this.props.history.replace('/')
    }
    render(){
        return (
            <WhiteBox>
                <MDBBtn 
                outline
                color="primary"
                style={{
                    "left": "30px",
                    "position": "fixed",
                }}
                onClick={this.backToSchoolSelection}  
                >
                    <i className="fa fa-arrow-circle-o-left" style={{"margin-right": "5px", "fontSize": '18px'}}aria-hidden="true"></i> 
                    School Selection
                </MDBBtn>
                
                <h1>Did you have fun today?</h1>
                <MDBBtn color="danger">No</MDBBtn>
                <MDBBtn color="success">Yes</MDBBtn>
            </WhiteBox>
        )  
    }
}

export default Survey;