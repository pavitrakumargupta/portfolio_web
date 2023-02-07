import React from 'react'
import "./aboutPage.css"
import devpimage from "../../assets/devpimage.webp"
import profile from "../../assets/profile.jpg"
const aboutPage = () => {
  return (
    <div id='About' className='about'>
        <h1>About</h1>
        
        <div className='field'>
            <div className='textfield'>
            <img src={profile} alt="" />
             <p>Hi, I'm [ Pavitra Kumar Gupta ], a full-stack developer with 1 years of experience building dynamic, user-friendly web applications. I have a passion for coding and love to take complex problems and turn them into intuitive and elegant solutions.
              With a strong background in [React.js, Node.js, MongoDB, Javascript, HTML ,CSS ], I am proficient in both front-end and back-end development. I am comfortable working with a variety of technologies, including [Bootstrap, TailWind, Git, REST APIs, AWS, Firebase, Heroku].
              I am a team player, always looking for ways to collaborate and learn from others, but also able to work independently and take ownership of projects from start to finish.
              When I am not coding, I enjoy [Your Hobbies/Interests].
              Feel free to take a look at my portfolio and reach out if you'd like to work together on a project.</p>
              
            </div>
            
            <img src={devpimage} alt="" />
        </div>
    </div>
  )
}

export default aboutPage