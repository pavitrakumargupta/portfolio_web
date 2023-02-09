import React, { useLayoutEffect, useRef,useState } from 'react'
import Logo from "../../assets/logo.jpg"
import "./navbar.css"
import { TiThMenu} from "react-icons/ti";
import { CgMenu, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const services=["Home","About","Skills","Projects"]
  return (
    <nav className={menuIcon ? 'nav active' : 'nav'}> 
      <img src={Logo} alt="" />
      <div  className= 'pages'>
        {services.map(key=>{
          let url="#"+key
          return(<a href={url}><button onClick={() => setMenuIcon(false)} name={key}>{key}</button></a>)
        }
        )}
      </div>  
      <div className="mobileMenuBtn">
        <CgMenu className="mobileMenuIcon openMenuIcon" onClick={() => setMenuIcon(true)} />
        <CgClose className="mobileMenuIcon closeMenuOutline" onClick={() => setMenuIcon(false)} />
      </div>
    </nav>
    
  );
}

export default Navbar