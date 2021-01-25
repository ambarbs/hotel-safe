import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Locker } from './Locker';
import { LockerWrapper } from './Locker.Styles';
import { KeyPad } from './KeyPad/KeyPad';
import { RightItemsWrapper } from '../App/App.Styles';
import { DisplayPanel } from './DisplayPanel/DisplayPanel';
import { Indicator } from './DisplayPanel/DisplayPanel.Styles';

configure({ adapter: new Adapter() });

describe('Locker Component', () => {
  it('should render Locker without any issues ', () => {
    const wrapper = shallow(
      <Locker />,
    );
    const lockWrapper = wrapper.find(LockerWrapper);
    const keypad = lockWrapper.shallow().find(KeyPad);
    const rightItemsWrapper = lockWrapper.shallow().find(RightItemsWrapper);
    const displayPanel = lockWrapper.shallow().find(DisplayPanel);
    const indicator = lockWrapper.shallow().find(Indicator);

    expect(lockWrapper).toHaveLength(1);
    expect(keypad).toHaveLength(1);
    expect(rightItemsWrapper).toHaveLength(1);
    expect(displayPanel).toHaveLength(1);
    expect(indicator).toHaveLength(1);
  });
});
