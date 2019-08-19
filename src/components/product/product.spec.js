import React from 'react';
import {Provider} from "react-redux";
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from "./product";
import { store } from '../../index';

configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<Provider store={store}><Product /></Provider>);

describe('Product',()=>{
    it('snapshot', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    })
});