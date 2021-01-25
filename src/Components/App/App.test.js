import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { AppWrapper } from './App.Styles';
import { Locker } from '../Locker/Locker';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />,
    );
  });

  it('should render App without any issues ', () => {
    const appWrapper = wrapper.find(AppWrapper);
    const locker = appWrapper.shallow().find(Locker);

    expect(appWrapper).toHaveLength(1);
    expect(locker).toHaveLength(1);
  });
});
