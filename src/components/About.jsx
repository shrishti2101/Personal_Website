import './About.scss';
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
function About(){
    return(
        <>
            <div>
                <h1>Personal Details</h1>
                <div className="details">
                    <div className="details-left">
                        <div className="left">
                            <p>Name:</p>
                            <p>Age:</p>
                            <p>Languages:</p>
                            <p>Country:</p>
                        </div>
                        <div className="right">
                            <p>Shrishti Jain</p>
                            <p>21</p>
                            <p>Hindi,English</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="details-right">
                        <div className="left">
                            <p>Email:</p>
                            <p>Phone:</p>
                            <p>LinkedIn</p>
                            <p>Github</p>
                        </div>
                        <div className="right">
                            <p>shrishtijain2101@gmail.com</p>
                            <p>+91 9314502348</p>
                            <p>shrishti-jain21</p>
                            <p>https://github.com/shrishti2101</p>
                        </div>
                    </div>
                </div>
                <div className='education and exp'>
                    <h1>Education & Experience</h1>
                    <div className='education-details'>
                        <ul>
                            <li>
                                <div className='icon'>
                                <i><FaGraduationCap/></i>
                               </div>
                                <span>2020-2023</span>
                                <h3>Bachelors in Computer Applications <span>- Poornima University</span></h3>
                                <p>Percentage <span>-75%</span></p>
                            </li>
                            <li>
                               <div className='icon'>
                                <i><FaGraduationCap/></i>
                               </div>
                                <span>2019-2020</span>
                                <h3>12th<span>- Mahaveer Public School</span></h3>
                                <p>Percentage <span>-75%</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className='experience'>
                        <ul>
                            <li>
                            <div className='icon'>
                                <i><MdWork/></i>
                               </div>
                                <span>May 2023 - Oct 2023</span>
                                <h3>UI Developer Trainee <span> - Sarvika Technologies</span></h3>
                                <p>Work as UI Developer Trainee. Have worked on responsive web designs andlive projects of company which comprises of form designing and e-commercewebsite designs.</p>
                            </li>
                            <li>
                               <div className='icon'>
                                <i><MdWork/></i>
                               </div>
                                <span>June 2022 - July 2022</span>
                                <h3>PowerApps Intern <span> - Celebal Technologies Pvt Ltd</span></h3>
                                <p></p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
