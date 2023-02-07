import React from 'react'
import "./services.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle, 
  MDBCardText, 
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
const services = () => {
  const projects=[1,2,3,4,5]
  return (
    <div id='Projects' className='service'>
         <h1>Projects</h1>
         <div className='Projects'>
          {projects.map(key=>(
              <MDBCard className='project'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
              <MDBCardBody className='card_body'>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='#'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          ))}
         </div>
    </div>
  )
}

export default services