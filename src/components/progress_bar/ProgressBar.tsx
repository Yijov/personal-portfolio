
import React from "react";


const ProgressBar: React.FC<{bgcolor:string, completed:number, label:string}> = ({ bgcolor, completed, label }) => {
  
    const containerStyles = {
      diaplay: "flex",
      height: 22,
      width: "16rem",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: "1rem",
      textAlign: "center",
    } as const;
  
    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "left",
    } as const;
  
    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "light",
      fontSize: "0.8rem",
      textShadow: "1px 1px 2px lightgray",
      marginLeft: "0.5rem",
    };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${label}`}</span>
        </div>
      </div>
    );
  };
  export default ProgressBar