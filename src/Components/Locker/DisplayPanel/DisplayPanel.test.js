import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DisplayPanel } from './DisplayPanel';
import { DisplayPanelWrapper } from './DisplayPanel.Styles';

configure({ adapter: new Adapter() });

describe('Locker Component', () => {
  it('should render DisplayPanel with 0 children when currentInput is blank string "" ', () => {
    const wrapper = shallow(
      <DisplayPanel currentInput="" />,
    );
    const displayPanelWrapper = wrapper.find(DisplayPanelWrapper);

    expect(displayPanelWrapper).toHaveLength(1);
    expect(displayPanelWrapper.children()).toHaveLength(0);
  });
  it('should render DisplayPanel with 3 children when currentInput is blank string "123" ', () => {
    const wrapper = shallow(
      <DisplayPanel currentInput="123" />,
    );
    const displayPanelWrapper = wrapper.find(DisplayPanelWrapper);

    expect(displayPanelWrapper).toHaveLength(1);
    expect(displayPanelWrapper.children()).toHaveLength(3);
  });
});
