import React from 'react';

const ProductPicture = ({ image, label }) => {

  return(
    <div className='picture'>
      <img className='picture-img' src={`/dist/${image.path}`} alt={image.alt} />
      <div className='picture-label'>{label}</div> 
    </div>
  )

}

export default ProductPicture;
