import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexAddCurrency from './ForexAddCurrency';

describe('<ForexAddCurrency />', () => {
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
  it('submit currency button should be disabled', () => {
    const tree = renderer
      .create(<ForexAddCurrency {...testProps} value="" isAddMoreCurrency />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('add more button should work', () => {
    const clickFn = jest.fn();

    const wrapper = shallow(
      <ForexAddCurrency {...testProps} onClickAddMoreCurrency={clickFn} />
    );
    wrapper.find('Button#addMoreCurrency').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('submit dropdown button should work', () => {
    const clickFn = jest.fn();

    const wrapper = shallow(
      <ForexAddCurrency
        {...testProps}
        isAddMoreCurrency
        onSubmitAddCurrency={clickFn}
      />
    );
    wrapper.find('Button#submitNewCurrency').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
