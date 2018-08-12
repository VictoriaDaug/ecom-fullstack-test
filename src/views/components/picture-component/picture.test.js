import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';

import Product from './product';

describe('<Product />', () => {
    const props = [{
        "title": "Retro Canvas",
        "description": "A cool vintage look. For people. Places. And spaces.",
        "image": {
            "path": "/images/product.jpg",
            "alt": "Retro Canvas"
        },
        "price": 500,
        "currency": "£",
        "priceLabel": "From",
        "productLabel": "",
        "cta": "Shop Now",
        "ctaLink": "/random/link/to/no/where"
    }, {
        "title": "Desk Canvas",
        "description": "Our smallest canvas for your big moments.",
        "image": {
            "path": "/images/product.jpg",
            "alt": "Desk Canvas"
        },
        "price": 1250,
        "currency": "£",
        "priceLabel": "From",
        "productLabel": "",
        "cta": "Shop Now",
        "ctaLink": "/random/link/to/no/where"
    }]
    it('renders without crashing', () => {
        shallow(<Product data={props}/>);
    });
});
