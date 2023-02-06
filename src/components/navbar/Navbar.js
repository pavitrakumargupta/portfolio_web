import React, { useState } from 'react'
import Logo from "../../assets/logo.jpg"
import "./navbar.css"
import { TiThMenu} from "react-icons/ti";
const Navbar = () => {
  const [activeService,setActiveService]=useState("Home")
  const fieldStyle={
    fontSize: "22px",
    color:"black",
    borderBottom:"4px solid black"
  }
  const services=["Home","About","Services","Setting"]
  const [fieldsnameStyle,setfieldnameStyle]=useState({
    Home: fieldStyle,
    // About:{},  
    // Services:{}, 
    // Setting:{}
  })  
  const hanndleClick=(event)=>{
    const name=event.target.name;
    console.log(name);
    setActiveService(event.target.name)
    setfieldnameStyle(()=>{return{[name]:fieldStyle}})
  } 
  return (
    <nav> 
      <img src={Logo} alt="" />
      <div className='pages'>
        {services.map(key=>(
          <button style={fieldsnameStyle[key]} onClick={hanndleClick} name={key}>{key}</button>
        ))}
        
      </div>  
      <TiThMenu   className='menu '/> 
      
    </nav>
    
  );
}

export default Navbar