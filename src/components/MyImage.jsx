import React, { useState } from "react";
const MyImage = ({ image = [{ url: "" }] }) => {
const [mainImage, setMainImage] = useState(image[0]);
  return (    
    <div className="single-pro-img">
      <div className="row">
        <div className="col-md-4">
            
            {image.map((curElm,index) => {
                return (                
                    <figure key={index}>
                    <img
                        src={curElm.url}
                        alt={curElm.filename}
                        className="box-image--style img-responsive img-thumbnail"                        
                        onClick={() => setMainImage(curElm)}
                    />
                    </figure>
                );
            })}
            
        </div>
        <div className="col-md-8">
        <img className="img-thumbnail" src={mainImage.url} alt={mainImage.filename} />
        </div>
        
        </div>
  </div>
  );
};
export default MyImage;