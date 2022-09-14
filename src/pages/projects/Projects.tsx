import React from 'react'

//page transitions
import { motion } from "framer-motion";
import { IoIosAlbums } from "react-icons/io";
import { SmallHorizontalLine } from '../../components';
import ProjectCard from './project_card/ProjectCard';


//imagess chessnode

import ChessNodeOne from "../../assets/images/chess_node/one.png"
import ChessNodetwo from "../../assets/images/chess_node/tow.png"
import ChessNodethree from "../../assets/images/chess_node/three.png"
import ChessNodeFour from "../../assets/images/chess_node/four.png"

//imagess EVA

import EvaOne from "../../assets/images/eva_kpi_tool/one.png"
import Evatwo from "../../assets/images/eva_kpi_tool/tow.png"
import Evathree from "../../assets/images/eva_kpi_tool/three.png"
import EvaFour from "../../assets/images/eva_kpi_tool/four.png"
import EvaFive from "../../assets/images/eva_kpi_tool/five.png"


//agenda images

import AgendaOne from "../../assets/images/customers_manager/one.png"
import AgendaTwo from "../../assets/images/customers_manager/two.png"
import AgendaThree from "../../assets/images/customers_manager/three.png"


//intranter images
import UntOne from "../../assets/images/intranter/one.png"
import Unttwo from "../../assets/images/intranter/two.png"



const Projects:React.FC<{hasHeading:boolean}> = ({hasHeading}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ width: "100%" }}
  >
    <div className='page projects'>  
    {hasHeading && (
      <>
        <h2>
          <IoIosAlbums />
        </h2>
        <h2>My Projects</h2>
        <SmallHorizontalLine color={"#4d94ff"} />
      </>
    )}
    <div className="cards-container">
    <ProjectCard 
      link='https://github.com/Yijov/multiplayer-online-chess-game'
      title="online chess multiplayer and chat"
      Description='NODE TS REACT SCSS WEB-SOCKETS'
      images={[ChessNodeOne,ChessNodetwo, ChessNodethree, ChessNodeFour ]}

    />

    <ProjectCard 
      link='https://github.com/Yijov/EVA--Evaluador-de-KPIs'
      title="EVA: KPI Evauator"
      Description='NET CORE REACT REST'
      images={[EvaOne,Evatwo, Evathree, EvaFour, EvaFive ]}

    />

    <ProjectCard 
      link='https://github.com/Yijov/Agenda-de-clientes'
      title="Customers Agenda"
      Description='REACT NODE EXPRESS MongoDB'
      images={[AgendaOne,AgendaTwo, AgendaThree]}

    />

    <ProjectCard 
      link='https://github.com/Yijov/intranter'
      title="Trafic tickets Tracker"
      Description='REACT NATIVE'
      images={[UntOne,Unttwo]}

    />

    </div>
   
    </div>
    </motion.div>
  )
}


export default Projects;