import React from 'react';
import {Provider} from "react-redux";
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { store } from '../../index';
import Category from "./category-buttons";

configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<Provider store={store}><Category /></Provider>);

describe('Category buttons',()=>{
    it('snapshot', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    })
});