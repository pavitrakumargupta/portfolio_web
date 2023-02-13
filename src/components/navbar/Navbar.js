import React, {useState } from 'react'
import Logo from "../../assets/logo.jpg"
import "./navbar.css"
import { CgMenu, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const services=["Home","About","Skills","Projects"]

  const fieldStyle={
    borderBottom:"5px solid",
    fontSize:"20px",
    marginTop:"-5px"
  }
  const [fieldsnameStyle,setfieldnameStyle]=useState({
    Home: fieldStyle,
  })
  const handleFieldstyle=(event)=>{
    const name=event.target.name;
    console.log(name)
    setfieldnameStyle(()=>{return{[name]:fieldStyle}})
  } 

  return (
    <nav className={menuIcon ? 'nav active' : 'nav'}> 
      <img src={Logo} alt="" />
      <div  className= 'pages'>
        {services.map(key=>{
          let url="#"+key
          return(<a href={url}><button style={fieldsnameStyle[key]} onClick={(event) => {setMenuIcon(false); handleFieldstyle(event)}} name={key}>{key}</button></a>)
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