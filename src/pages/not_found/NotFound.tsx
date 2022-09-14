import React from "react";
//page transitions
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: "100%" }}
    >
      <div className="page notfound">
        <h2>404</h2>
        <h2>Ups!! Looks like your did a wrong turn someware</h2>
      </div>
    </motion.div>
  );
};

export default NotFound;