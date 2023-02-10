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
  const project=[
    {
      ProjectTittle:"Blog App",
      definition:"Blog app where you can Post your blogs and have your own account while surfing Just create account and start surfing",
      ImageLink:"https://user-images.githubusercontent.com/88044814/218199731-a2966f2d-4edd-4ee3-8194-4738096b1c6a.png",
      CodeLink:"https://github.com/pavitrakumargupta/Blog-Posting--App",
      Link:"https://taupe-cactus-098771.netlify.app/"
    },
    {
      ProjectTittle:"Tin Dog",
      definition:"It is a static dummy website where u can check out a pet dog at diffrent prices",
      ImageLink:"https://user-images.githubusercontent.com/88044814/218204186-6363c940-6dd1-4e4c-8ef1-185f2ccd6a0c.png",
      CodeLink:"https://github.com/pavitrakumargupta/Tin_dog",
      Link:"https://pavitrakumargupta.github.io/Tin_dog/tindog/index.html"
    },{
      ProjectTittle:"Simon_Game_Challenge",
      definition:"game of remembring the pattern it is just small game where will system automatically generate diifrent pattern you just have to remmber it follow it ",
      ImageLink:"https://user-images.githubusercontent.com/88044814/218207214-7daadd30-8c96-4df2-b51c-bcbcc49dcecd.png",
      CodeLink:"https://github.com/pavitrakumargupta/Simon_Game_Challenge",
      Link:"https://pavitrakumargupta.github.io//Simon_Game_Challenge/simon-game/index.html"
    },{
      ProjectTittle:"Simon_Game_Challenge",
      definition:"Website to plays different kinds of musical instruments that ca entertain with sounds and can with diffrent sounds",
      ImageLink:"https://user-images.githubusercontent.com/88044814/218208097-b2fc5be8-d8ff-4dec-9426-0c4beebd50e4.png",
      CodeLink:"https://github.com/pavitrakumargupta/Drum_Kit_Sounds",
      Link:"https://pavitrakumargupta.github.io//Drum_Kit_Sounds/drum-kit/index.html"
    }
  ]
  return (
    <div id='Projects' className='service'>
         <h1>Projects</h1>
         <div className='Projects'>
          {project.map(key=>(
              <MDBCard className='project'>
                <MDBCardImage src={key.ImageLink} fluid alt='...' />
              <MDBCardBody className='card_body'>
                <MDBCardTitle>{key.ProjectTittle}</MDBCardTitle>
                <MDBCardText>{key.definition}</MDBCardText>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                  <MDBBtn href={key.CodeLink}>Code Link ↗</MDBBtn>
                  <MDBBtn href={key.Link}>Web Link ↗</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
         </div> 
    </div>
  )
}

export default services
