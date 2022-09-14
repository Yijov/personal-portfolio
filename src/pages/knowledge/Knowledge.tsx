import React from "react";

//icons
import { IoIosConstruct } from "react-icons/io";

//partial components
import {ProgressBar, SmallHorizontalLine} from "../../components";

//page transitions
import { motion } from "framer-motion";

const Knowledge:React.FC<{hasHeading:boolean}> = ({hasHeading}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ width: "100%" }}
  >
    <div className="knowledge page">
      {hasHeading && (
        <>
          <h2>
            <IoIosConstruct />
          </h2>
          <h2>Knowledge</h2>
          <SmallHorizontalLine color={"#4d94ff"} />
          <br />
        </>
      )}
      <ul>
        <li>
          <ProgressBar bgcolor={"#6600cc"} label={"C# Net Core"} completed={83} />
        </li>
        <li>
          <ProgressBar bgcolor={"#6600cc"} label={"Entity Framework Core"} completed={74} />
        </li>
        <li>
          <ProgressBar bgcolor={"#6600cc"} label={"SQL Server"} completed={74} />
        </li>

        <li>
          <ProgressBar bgcolor={"#3333ff"} label={"NodeJS/ TypeScript"} completed={95} />
        </li>
        <li>
          <ProgressBar bgcolor={"#4d94ff"} label={"React"} completed={94} />
        </li>
        <li>
          <ProgressBar bgcolor={"#4d94ff"} label={"React Native"} completed={85} />
        </li>
        <li>
          <ProgressBar bgcolor={"#00b359"} label={"Vue"} completed={80} />
        </li>

        <li>
          <ProgressBar bgcolor={"#ff3300"} label={"HTML5"} completed={90} />
        </li>
        <li>
          <ProgressBar bgcolor={"#4d4dff"} label={"CSS3/SCSS"} completed={90} />
        </li>
        <li>
          <ProgressBar bgcolor={"#00b359"} label={"MongoDB"} completed={85} />
        </li>
        <li>
          <ProgressBar bgcolor={"#4d94ff"} label={"PostgreSQL"} completed={70} />
        </li>
        <li>
          <ProgressBar bgcolor={"#ff3300"} label={"GIT"} completed={68} />
        </li>
      </ul>
    </div>
  </motion.div>
  )
}
export default Knowledge