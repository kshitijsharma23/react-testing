import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Counter from '../Counter';

describe('Counter unit test cases', () => {
    let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Counter />);
    })

    it('should render snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should have initial value as 0', () => {
        const counterText = component.find('span.counter-value').text();
        expect(counterText).toBe('0');
    });

    it('should disable decrement button when counter value is 0', () => {
        const decrementButton = component.find('button.decrement');
        const isDisabled = decrementButton.props().disabled;
        expect(isDisabled).toBeTruthy();
    });

    it('should not decrease counter when button is disabled', () => {
        const decrementButton = component.find('button.decrement');
        act(() => {
            decrementButton.simulate('click');
        });

        const counterText = component.find('span.counter-value').text();
        expect(counterText).toBe('0');
    });

    it('should increase counter on increment', () => {
        const incrementButton = component.find('button.increment');
        incrementButton.simulate('click');

        const counterText = component.find('span.counter-value').text();
        expect(counterText).toBe('1');
        expect(component).toMatchSnapshot();
    });

    xit('should decrease counter on decrement', () => {
        const decrementButton = component.find('button.decrement');
        decrementButton.simulate('click');

        const counterText = component.find('span.counter-value').text();
        expect(counterText).toBe('-1');
        expect(component).toMatchSnapshot();
    });

    it('should have correct value after multiple increments/decrements', () => {
        component.find('button.increment').simulate('click'); // 1
        expect(component.find('span.counter-value').text()).toBe('1');

        component.find('button.decrement').simulate('click'); // 0
        expect(component.find('span.counter-value').text()).toBe('0');

        component.find('button.increment').simulate('click'); // 1
        expect(component.find('span.counter-value').text()).toBe('1');

        component.find('button.decrement').simulate('click'); // 0
        expect(component.find('span.counter-value').text()).toBe('0');

        component.find('button.increment').simulate('click'); // 1
        expect(component.find('span.counter-value').text()).toBe('1');

        component.find('button.increment').simulate('click'); // 2
        expect(component.find('span.counter-value').text()).toBe('2');

        component.find('button.decrement').simulate('click'); // 0
        expect(component.find('span.counter-value').text()).toBe('1');

        component.find('button.decrement').simulate('click'); // 0
        expect(component.find('span.counter-value').text()).toBe('0');

        component.find('button.decrement').simulate('click'); // 0
        expect(component.find('span.counter-value').text()).toBe('0');
    });
});