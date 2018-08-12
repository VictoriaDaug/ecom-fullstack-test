import React from 'react';

const ProductPicture = ({ image, label }) => {

  return(
    <div>
      <img src={`/dist/${image.path}`} alt={image.alt} />
      <div>{label}</div> 
    </div>
  )

}

export default ProductPicture;
