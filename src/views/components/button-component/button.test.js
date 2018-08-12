import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    const props = {
        'cta': 'Shop Now'
    }
    it('Renders without crashing', () => {
        shallow(<Button buttonLabel={props}/>);
    });
});
