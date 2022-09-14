import React from "react";
import { IoMdCode } from "react-icons/io";
import {SmallHorizontalLine} from "../../components";
import AuthorPicture from "../../assets/images/this_app/me.jpg"
import InfoCube from './InfoCube';
import coreIcon from "../../assets/images/this_app/netcore.png"
import tsIcon from "../../assets/images/this_app/tsicon.jpg"
import reactIcon from "../../assets/images/this_app/react.jpeg"
import sqlIcon from "../../assets/images/this_app/sql.png"

//page transitions
import { motion } from "framer-motion";



 const About:React.FC<{hasHeading:boolean}> = ({hasHeading}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: "100%" }}
    >
      <div className="about page">
        {hasHeading && (
          <>
            <h2><IoMdCode /></h2>
            <SmallHorizontalLine color={"white"} />
            <br />
          </>
        )}

        <div className="about-content-container">
        <img src={AuthorPicture} className="author-picture" alt="Yirbett Joseph" />
        <div className="info-cube-container">
            <>
            <InfoCube icon={coreIcon} info="NetCore Backend Developer"/>
            <InfoCube icon={tsIcon} info="JS/TS FullStack Developer"/>
            <InfoCube icon={reactIcon} info="React Native & React"/>
            <InfoCube icon={sqlIcon} info="SQL & NoSQL"/>
            </>
        </div>
        <div className="info-card">
          <h2>Hello there!</h2>
          <h2>My name is Yirbett Joseph.</h2>
          <p>Im a full Stack software developer graduated from ITLA</p>
          <button>Contact Me</button>
        </div>
      
        </div>
        
    
      </div>
    </motion.div>
  )
}

export default About