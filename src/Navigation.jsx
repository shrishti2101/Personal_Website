import { Link } from "react-router-dom";

function Navigation(){
   return (
    <>
    <nav>
    <h3>Portfolio</h3>
    <ul className="navlinks">
        
        <li>
            <Link to="/">Home</Link>
        </li>
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
    </nav>
    
    </>
   )
}
export default Navigation 