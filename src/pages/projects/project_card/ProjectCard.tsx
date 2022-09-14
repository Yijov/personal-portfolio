import React from 'react'
import Slyder from './Slyder';
import { AiOutlineGithub } from "react-icons/ai";


 const ProjectCard:React.FC<{images:string[], title:string, Description:string, link:string}> 
 = ({images, title, Description, link}) => {
  return (
    <div className='project-card'>
      <h2 className='project-name'>{title.toLocaleUpperCase()}</h2>
      <Slyder images={images}/>
      <h2 className='project-description'>{Description}</h2>
      <a href={link} rel="noreferrer" target="_blank">
      <AiOutlineGithub style={{ fontSize: "2.5rem", marginRight: "0.5rem" }}/>
      </a>
      
      
      </div>
  )
}


export default ProjectCard;