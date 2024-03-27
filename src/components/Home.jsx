import { Link } from 'react-router-dom';
import Hero from '../assets/photo.png'
import './Home.scss'
function Home() {
    return(
        <div className='hero-container'>
        <div className='hero'>
        <div className='hero-img'>
            <img src={Hero} alt="" />
        </div>
        <div className='hero-text'>
            <h1>
                I'm <span>Shrishti Jain</span>
            </h1>
            <h2>
               Frontend Developer
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum ipsum ut veniam amet laudantium cupiditate tenetur deleniti aut? Amet velit blanditiis obcaecati et! Adipisci laboriosam nobis nulla optio voluptatem.</p>
            <Link to='/about'>Know More</Link>
        </div>
        </div>
        </div>
    )
}

export default Home;