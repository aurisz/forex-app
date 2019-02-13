import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexDisplayCard from '../components/ForexDisplayCard';

describe('Forex Display Card', () => {
  const component = (
    <ForexDisplayCard
      currency="IDR"
      currencyName="Indonesian Rupiah"
      baseValue={10}
      exchangeValue={13928}
      onDeleteCurrency={jest.fn()}
    />
  );

  it('renders without crashing', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
