import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Request from '../src/components/Request';

const testProps = {
  id: 1,
  title: "Todo 1",
  desc: "Finish an application"
};


describe('<Request />', () => {
  it('has <h1>', () => {
    const wrapper = shallow(<Request {...testProps} />);
    wrapper.setProps({ title: 'Todo 1' });
    expect(wrapper.find('.header').text()).toBe('1: Todo 1');
  });
});
