import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


const Slyder:React.FC<{images:string[]}>=({images
})=> {
  const imagesCollection = images.map(img => ({url:img})) 

  const maxWidth=400
  const heightRatio=window.innerWidth >  385? 185: 150
 const calculatedWidth= window.innerWidth > maxWidth ? maxWidth: window.innerWidth

  return (
    <div className="slyder">
      <SimpleImageSlider
        width={calculatedWidth}
        height={heightRatio}
        images={imagesCollection}
        showBullets={true}
        showNavs={true}
        useGPURender={true}
        navStyle={5}
        style={{
          marginTop: "1rem",
          backgroundSize: "100% 100px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

export default  Slyder;