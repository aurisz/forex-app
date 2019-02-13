import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexDisplayCard from './ForexDisplayCard';

describe('<ForexDisplayCard />', () => {
  const testProps = {
    currency: 'IDR',
    currencyName: 'Indonesian Rupiah',
    baseValue: 10,
    exchangeValue: 13928,
    onDeleteCurrency: jest.fn()
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ForexDisplayCard {...testProps} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<ForexDisplayCard {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('delete currency button should work', () => {
    const clickFn = jest.fn();

    const wrapper = shallow(
      <ForexDisplayCard {...testProps} onDeleteCurrency={clickFn} />
    );
    wrapper.find('Button#deleteCurrency').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
