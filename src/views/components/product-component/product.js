import React from 'react';
import ProductPicture from '../picture-component/picture.js';
import ProductDescription from '../description-component/description.js';
import Button from '../button-component/button.js';

const Product = ({ data }) => (
    <div className='product'>
      {
        data.map((product, index) => (
          <div className='item' key={index}>
            <ProductPicture
              image={product.image}
              label={product.productLabel}
            />
            <div className='productInfo'>
              <ProductDescription
                title={product.title}
                description={product.description}
                priceLabel={product.priceLabel}
                currency={product.currency}
                price={product.price}
              />
              <Button
                buttonLabel={product.cta}
                link={product.ctaLink}
              />
            </div>
          </div>
        ))
      }
    </div>
)

export default Product;
