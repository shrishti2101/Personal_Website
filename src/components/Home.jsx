import { Link } from 'react-router-dom';
import Hero from '../assets/photo.png'
import './Home.scss'
import { ReactTyped as Typed} from "react-typed";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:179833646.
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Home() {

    return(
        <div className='hero-container'>
        <div className='hero'>
        <div className='hero-img'>
            <img src={Hero} alt="" />
        </div>
       <div className='hero-text'>
            <h1 className='hero-title'>
                I'm <span className="title">
                <Typed strings={["Shrishti Jain","Frontend Developer"] }
                typeSpeed={100} 
                backSpeed={100} 
                loop/>
                </span></h1>
            <p>As a recent graduate, I'm deeply passionate about web development and committed to continuously learning and improving my skills. I have a strong desire to stay updated with the latest technologies and industry trends.</p>
            {/* <div className='social-icons'>
               <span><a href="https://github.com/shrishti2101"><i><FaGithub /></i></a></span> 
               <span><a href="https://www.linkedin.com/in/shrishti-jain21/"><i><FaLinkedin /></i></a></span> 
            </div> */}
            <Link to='/about'>Know More</Link>
            
        </div>
        </div>
        </div>
    )    

}

export default Home;