import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';

import ProductPicture from './picture';

describe('<ProductPicture />', () => {
    const image = {
      "image": {
          "path": "/images/product.jpg",
          "alt": "Retro Canvas"
      }
    }
    const label ={
      "productLabel": ""
    }
    it('Renders without crashing', () => {
        shallow(<ProductPicture image={image} label={label}/>);
    });
});
