import React, { useLayoutEffect, useRef,useState } from 'react'
import Logo from "../../assets/logo.jpg"
import "./navbar.css"
import { TiThMenu} from "react-icons/ti";
const Navbar = () => {
  const ref = useRef(null);
  const [nav_width, nav_setWidth] = useState(0);
  useLayoutEffect(() => {
    nav_setWidth(ref.current.offsetWidth);     
  }, []);

  const [ menuDisplay, setMenuDisplay]=useState({})

  const [fieldStyle,setfieldStyle]=useState({
    fontSize: "22px",
    color:"black",
    borderBottom:"4px solid black",
  })

  const services=["Home","About","Skills","Projects"]
  
  const [fieldsnameStyle,setfieldnameStyle]=useState({
    Home: fieldStyle,
  })  

  const [navStyle,setNavStyle]=useState({
    
  })  
   

  const hanndleClick=(event)=>{
    const name=event.target.name;
    console.log(name);
    
    setfieldnameStyle(()=>{return{[name]:fieldStyle}})
    nav_width<980?handlenavStyle('section'):<></>
  } 
  const handlenavStyle=async(name)=>{
    // await setfieldStyle(()=>{return{fontSize: "22px",color:"white",
    // borderBottom:"4px solid white"}})
    // if(menuDisplay.display==="none"){
    //   await setMenuDisplay(()=>{ return { display:"block"}})
    //   await setNavStyle(()=>{return {display:"none"}})
    // }else{
      // await setMenuDisplay(()=>{ return { display:"none"}} )
      // await setNavStyle(()=>{return {display:"flex"}})
    // }
    
   console.log(name);
   if(name==='section'  ){
    console.log(nav_width);
    await setMenuDisplay(()=>{ return { display:"block"}})
    await setNavStyle(()=>{return {display:"none"}})
   }else{
    await setMenuDisplay(()=>{ return { display:"none"}} )
    await setNavStyle(()=>{return {display:"flex"}})
   }
  }
  return (
    <nav ref={ref} className='.nav'> 
      <img src={Logo} alt="" />
      <div  style={navStyle} className='pages'>
        {services.map(key=>{
          let url="#"+key
          return(<a href={url}><button style={fieldsnameStyle[key]} onClick={hanndleClick} name={key}>{key}</button></a>)
        }
          
        )}
        
      </div>  
      <TiThMenu name='menu' style={menuDisplay} onClick={handlenavStyle}   className='menu '/> 
      
    </nav>
    
  );
}

export default Navbar