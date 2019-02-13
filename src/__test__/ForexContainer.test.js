import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexContainer from '../containers/ForexContainer';

describe('Forex Container', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ForexContainer />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<ForexContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
