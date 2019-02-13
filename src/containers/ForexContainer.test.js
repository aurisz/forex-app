import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexContainer from './ForexContainer';

describe('<ForexContainer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ForexContainer />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<ForexContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should be handling input change for base value', () => {
    const wrapper = shallow(<ForexContainer />);
    wrapper
      .instance()
      .handleInputChange({ target: { value: 15, name: 'baseValue' } });
    expect(wrapper.instance().state.baseValue).toEqual(15);
  });
  it('should be handling input change for everything else', () => {
    const wrapper = shallow(<ForexContainer />);
    wrapper.instance().handleInputChange({
      target: { value: 'EUR', name: 'selectedNewCurrency' }
    });
    expect(wrapper.instance().state.selectedNewCurrency).toEqual('EUR');
  });
  it('should be handling click add more currency', () => {
    const wrapper = shallow(<ForexContainer />);
    wrapper.instance().handleClickAddMoreCurrency();
    expect(wrapper.instance().state.isAddMoreCurrency).toEqual(true);
  });
  it('should be handling add currency submit', () => {
    const wrapper = shallow(<ForexContainer />);

    wrapper.setState({ selectedNewCurrency: 'NOK' });

    wrapper.instance().handleAddCurrency();
    expect(wrapper.instance().state.currencyDisplays).toEqual([
      'IDR',
      'EUR',
      'GBP',
      'SGD',
      'NOK'
    ]);
    expect(wrapper.instance().state.selectedNewCurrency).toBe('');
    expect(wrapper.instance().state.isAddMoreCurrency).toEqual(false);
  });
  it('should be handling delete currency from list', () => {
    const wrapper = shallow(<ForexContainer />);

    wrapper.instance().handleDeleteCurrency('IDR');
    expect(wrapper.instance().state.currencyDisplays).toEqual([
      'EUR',
      'GBP',
      'SGD'
    ]);
  });
});
