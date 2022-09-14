import React from "react";
import Contactform from "./Form";

//page transitions
import { motion } from "framer-motion";

const Contact:React.FC<{hasHeading:boolean}> = ({hasHeading}) =>{
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ width: "100%" }}
  >
    <div className="contact page">
      <Contactform hasHeading={hasHeading} />
    </div>
  </motion.div>
  
  )
}


export default Contact