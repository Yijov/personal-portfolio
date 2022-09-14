import React from 'react'


 const InfoCube:React.FC<{info:string, icon:string}> = ({info, icon}) => {
  return (
    
    <div className='info-cube'>
        <img src={icon} className="info-cube_picture" alt="Yirbett Joseph" />
        <p>{info}</p>
    </div>
  )
}


export default InfoCube