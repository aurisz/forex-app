import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexBaseInput from './ForexBaseInput';

describe('<ForexBaseInput />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ForexBaseInput value={10} onInputChange={jest.fn()} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should accept value of integer', () => {
    const tree = renderer
      .create(<ForexBaseInput value={20} onInputChange={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should accept value of float', () => {
    const tree = renderer
      .create(<ForexBaseInput value={10.5} onInputChange={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should accept value of empty strings', () => {
    const tree = renderer
      .create(<ForexBaseInput value="" onInputChange={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Simulates onInputChange event', () => {
    const wrapper = mount(
      <ForexBaseInput value={10} onInputChange={jest.fn()} />
    );
    const input = wrapper.find('input#baseValueInput');

    input.simulate('change', {
      target: { value: 10 }
    });

    expect(input.props().value).toEqual(10);

    wrapper.unmount();
  });
});
