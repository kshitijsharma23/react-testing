import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App unit test cases', () => {
    it('should render snapshot', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    })
});
