import React from 'react';

const ProductDescription = ({ title, description, priceLabel, currency, price }) => {
  const normalizedPrice = (price/100).toFixed(2);
  return(
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        {priceLabel}<span>{currency}{normalizedPrice}</span>
      </p>
    </div>
  );
}

export default ProductDescription;
