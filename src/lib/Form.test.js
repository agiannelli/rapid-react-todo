import React from 'react';
import { Button } from '@material-ui/core';
import Form from './Form';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('should invoke onAddClick when add button is clicked', () => {
    const mockaddFn = jest.fn();
    const wrapper = shallow(<Form onAddClick={mockaddFn} />);

    wrapper.find(Button).simulate('click');
    expect(mockaddFn).toHaveBeenCalled();
});