import React from 'react'
import "./Homepage.css"
import { TypeAnimation } from 'react-type-animation';
import profile from "../../assets/image.jpg"
import Backgimage from "../../assets/computer_image1.jpg"
const Homepage = () => {
  return (
    <div className='home'>   
    <div className='intro'>
      
        <h1 class="purples">Hi I'am </h1>
        <h1 class="purples">Pavitra Kumar Gupta</h1>
        <h1 class="mint"> 
        <TypeAnimation
          sequence={[
            'Front-end Developer', // Types 'One'
            1000, // Waits 1s
            'Back-end Developer', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'MERN stack Developer', // Types 'Three' without deleting 'Two'
            2000, 
            'Full stack Developer',
            2000,
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{color:"green" }}
        />
        </h1>
       
      
      <button><a style={{"text-decoration": "none"}} href="https://drive.google.com/file/d/1DVErvw69bG7r1Cr5nr2w8yH0I6AwFMT9/view?usp=share_link">Resume ↗</a></button>
    </div>
    <img src={Backgimage} alt="" srcset="" />
    </div>
  )
}  

export default Homepage