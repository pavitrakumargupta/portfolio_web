import React from 'react'
import "./skills.css"
import html   from "../../assets/html.png"
import css   from "../../assets/css.png"
import react   from "../../assets/react.png"
import javascript   from "../../assets/javascript.webp"
import node   from "../../assets/node.png"
import mongodb   from "../../assets/mongodb.webp"
const skills = () => {
  const skills=[html,css,javascript,react,mongodb,node]
  return (
    <div id='Skills' className='skillspage'>
        <h1>Skills</h1>
        <div className='skills'>
            {skills.map(key=>(
              <img className='skill' src={key} alt="" />
            ))}
        </div>  
    </div>
  )
}

export default skills