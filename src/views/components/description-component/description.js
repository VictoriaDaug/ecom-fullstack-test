import React from 'react';

const ProductDescription = ({ title, description, priceLabel, currency, price }) => {
  const normalizedPrice = (price/100).toFixed(2);
  return(
    <div className='description'>
      <h1 className='description-title'>{title}</h1>
      <p className='description-text'>{description}</p>
      <p className='description-price'>
        {priceLabel}<span className='description-price_num'>{currency}{normalizedPrice}</span>
      </p>
    </div>
  );
}

export default ProductDescription;
