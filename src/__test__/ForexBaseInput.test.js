import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from 'reactstrap';
import renderer from 'react-test-renderer';

import ForexBaseInput from '../components/ForexBaseInput';

describe('Forex Base Input', () => {
  const component = <ForexBaseInput value={10} onInputChange={jest.fn()} />;

  it('renders without crashing', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Simulates on change event', () => {
    const wrapper = mount(
      <ForexBaseInput value={10} onInputChange={() => {}} />
    );
    const input = wrapper.find(Input);

    input.simulate('change', {
      target: { value: 10 }
    });

    expect(input.props().value).toEqual(10);
  });
});
