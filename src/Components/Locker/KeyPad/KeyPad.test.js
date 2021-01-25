import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { KeyPad, keys } from './KeyPad';
import { KeyPadGrid, KeyWrapper } from './KeyPad.Styles';

configure({ adapter: new Adapter() });

describe('KeyPad Component', () => {
  it('should render KeyPad without any issues ', () => {
    const wrapper = shallow(
      <KeyPad currentInput="" locked={false} lockerPIN="" />,
    );
    const keypadGrid = wrapper.find(KeyPadGrid);
    const keyWrapper = keypadGrid.shallow().find(KeyWrapper);
    expect(keypadGrid).toHaveLength(1);
    expect(keyWrapper).toHaveLength(12);
    expect(keypadGrid.children()).toHaveLength(12);
  });

  it('should render all 12 KeyPad buttons without any issues ', () => {
    const wrapper = shallow(
      <KeyPad currentInput="" locked={false} lockerPIN="" />,
    );
    const keypadGrid = wrapper.find(KeyPadGrid);
    const keyWrapper = keypadGrid.shallow().find(KeyWrapper);
    expect(keypadGrid).toHaveLength(1);
    expect(keyWrapper).toHaveLength(12);
    expect(keypadGrid.children()).toHaveLength(12);
    expect(keys
      .every((key, index) => key === keyWrapper.children().at(index).text())).toEqual(true);
  });
});
