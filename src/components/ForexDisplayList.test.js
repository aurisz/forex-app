import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ForexDisplayList from './ForexDisplayList';

describe('<ForexDisplayList />', () => {
  const testProps = {
    error: null,
    isLoaded: true,
    currencies: ['IDR'],
    baseValue: 10,
    rates: {
      IDR: 12323
    },
    currencyNames: {
      IDR: 'Rupiah'
    },
    handleDeleteCurrency: jest.fn()
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ForexDisplayList {...testProps} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render loading', () => {
    const tree = renderer
      .create(<ForexDisplayList {...testProps} isLoaded={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render error message', () => {
    const tree = renderer
      .create(<ForexDisplayList {...testProps} error={{ message: 'error' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render display list', () => {
    const tree = renderer.create(<ForexDisplayList {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render without crash if list is empty', () => {
    const tree = renderer
      .create(<ForexDisplayList {...testProps} currencies={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
