import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from './assets/menu.png'
import Close from './assets/Close.png'
import './Navigation.scss';

function Navigation(){
    const [open, setOpen] = useState(false);


function handletoggle(){
    setOpen(!open);
}

   return (
    <>
    <nav className="navbar">
    <div className="nav-brand">
    <Link to='/' className="logo"><h3>Portfolio</h3></Link> 
    <button onClick={handletoggle} className={`navbar-toggler ${open ?"open": ""}`} type="button">
        <img src={`${!open?Menu:Close}`} alt="" />
    </button>
    </div> 
    <div className="nav-menu">
    <ul className={`navlinks ${open ?"open":""}`}>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </div>
    
    </nav>
    
    </>
   )
}
export default Navigation 