import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


const schoolInfo = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={props.logo} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>
            <strong>Location:</strong> {props.location}
          </MDBCardText>
          <MDBBtn href="#">View Report</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default schoolInfo;