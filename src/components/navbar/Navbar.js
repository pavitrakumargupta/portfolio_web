import React, { useLayoutEffect, useRef,useState } from 'react'
import Logo from "../../assets/logo.jpg"
import "./navbar.css"
import { TiThMenu} from "react-icons/ti";
const Navbar = () => {
  

   

  const [fieldStyle,setfieldStyle]=useState({
    fontSize: "22px",
    color:"black",
    borderBottom:"4px solid black",
  })

  const services=["Home","About","Skills","Projects"]
  
  const [fieldsnameStyle,setfieldnameStyle]=useState({
    Home: fieldStyle,
  })  

 
   

  const hanndleClick=(event)=>{
    const name=event.target.name;    
    setfieldnameStyle(()=>{return{[name]:fieldStyle}})
     
  } 
   
  return (
    <nav   className='.nav'> 
      <img src={Logo} alt="" />
      <div   className='pages'>
        {services.map(key=>{
          let url="#"+key
          return(<a href={url}><button style={fieldsnameStyle[key]} onClick={hanndleClick} name={key}>{key}</button></a>)
        }
          
        )}
        
      </div>  
      <TiThMenu name='menu' className='menu '/> 
      
    </nav>
    
  );
}

export default Navbar