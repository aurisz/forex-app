import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexAddCurrency from '../components/ForexAddCurrency';

describe('Forex Add Currency', () => {
  const testProps = {
    options: ['IDR'],
    value: 'EUR',
    onInputChange: jest.fn(),
    onSubmitAddCurrency: jest.fn(),
    onClickAddMoreCurrency: jest.fn(),
    isAddMoreCurrency: false
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ForexAddCurrency {...testProps} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render button to add new currency', () => {
    const tree = renderer.create(<ForexAddCurrency {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render dropdown to select currency', () => {
    const tree = renderer
      .create(<ForexAddCurrency {...testProps} isAddMoreCurrency />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
