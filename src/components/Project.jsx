import './Project.scss';
import Data  from '../projects.json'
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
            
         <p>{project.description}</p>
         </div>
     </div>
    ))}
        </div>
       </>
    )
}

export default Project

