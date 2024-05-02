import './Project.scss';
import Data  from '../projects.json'
import { FaCode,FaGlobe } from "react-icons/fa";
function Project (){
    
    return (
        <>
         <h1>Project</h1>
         <div className="project-container">
         { Data.map((project)=>(       
         <div className="project-card" key={project.id}>
         <div className="project-img">
         <iframe src={project.image} height="100%" width="100%" scrolling="no"></iframe>
         </div>
         <div className="project-details">
         <h2>{project.name}</h2>
         
            {
               project.skills.map((skills)=>(
                <span>
                    {skills}
                </span>
               ))
            }
            <div className="project-links">
                <button><a href={project.github} target="_blank" rel="noreferrer"><i><FaCode/></i></a></button>
                <button><a href={project.url} target="_blank" rel="noreferrer"><i><FaGlobe/></i></a></button>
            </div>
         {/* <p>{project.description}</p> */}
         </div>
     </div>
    ))}
        </div>
       </>
    )
}

export default Project

