import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';

import ProductDescription from './description';

describe('<ProductDescription />', () => {
    const props = {
        "title": "Collage Canvas",
        "description": "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
        "price": 2500,
        "currency": "£",
        "priceLabel": "From"
    }
    it('Renders without crashing', () => {
        shallow(<ProductDescription data={props}/>);
    });
});
