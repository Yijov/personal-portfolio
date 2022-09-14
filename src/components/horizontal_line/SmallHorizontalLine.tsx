import React from "react";

 const  SmallHorizontalLine:React.FC<{color:string}>=({ color })=>{
  return (
    <hr
      style={{
        color: color,
        height: "3px",
        backgroundColor: color,
        width: "6rem",
        border: "0.5px solid white",
        borderRadius: "5px",
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
      }}
    />
  );
}

export default SmallHorizontalLine