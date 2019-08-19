import React from 'react';
import {Provider} from "react-redux";
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import   Products   from './products';
import { store } from '../../index';

configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<Provider store={store}><Products /></Provider>);

describe('Products',()=>{
    it('snapshot', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    })
});