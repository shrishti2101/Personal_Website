
import './Project.scss';
import Data from '../projects.json'
function Project (){
    
    return (
        <>
         <h1>Project</h1>
         <div className="project-container">
         { Data.map((project)=>(       
         <div className="project-card" key={project.id}>
         <div className="project-img">
         <img src={project.url} alt="" />
         </div>
         <div className="project-details">
         <h2>{project.name}</h2>
         <p>{project.description}</p>
         </div>
     </div>
    ))}
        </div>
       </>
    )
}

export default Project

