import { Link } from 'react-router-dom';
import Hero from '../assets/photo.png'
import './Home.scss'
import { ReactTyped as Typed} from "react-typed";


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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum ipsum ut veniam amet laudantium cupiditate tenetur deleniti aut? Amet velit blanditiis obcaecati et! Adipisci laboriosam nobis nulla optio voluptatem.</p>
            <Link to='/about'>Know More</Link>
        </div>
        </div>
        </div>
    )    

}

export default Home;