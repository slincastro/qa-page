import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import Pyramid from './pyramid';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Pyramid />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains an div component', () => {
    expect(wrapper.find('div').exists()).toBeTruthy()
})

it('contains a pyramid div', () => {
    expect(wrapper.find('div.Pyramid-container').exists()).toBeTruthy()
})

it('contains a svg', () => {
    expect(wrapper.find('svg.Pyramid').exists()).toBeTruthy()
})

it('renderize ui tests with css class', () => {
    expect(wrapper.find('polygon.UI-tests').exists()).toBeTruthy()
})

it('renderize integration tests with css class', () => {
    expect(wrapper.find('polygon.Int-tests').exists()).toBeTruthy()
})

it('renderize ui tests with css class', () => {
    expect(wrapper.find('polygon.Unit-tests').exists()).toBeTruthy()
})

