import React from "react";

 const  HorizontalLine: React.FC<{color:string}>=({ color })=>{
  return (
    <hr
      style={{
        color: color,
        height: "0.5px",
        backgroundColor: color,
        width: "100%",
        border: "0.5px solid white",
        marginBottom: "1rem",
        marginTop: "1rem",
      }}
    />
  );
}

export default HorizontalLine