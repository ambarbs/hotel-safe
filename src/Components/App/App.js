import { AppWrapper, RightItemsWrapper } from './App.Styles';
import { KeyPad } from '../Locker/KeyPad/KeyPad';
import { DisplayPanel } from '../Locker/DisplayPanel/DisplayPanel';
import { Indicator } from '../Locker/DisplayPanel/DisplayPanel.Styles';
// import { KeyPadWrapper } from '../Locker/KeyPad/KeyPad.Styles';
import { LockerWrapper } from '../Locker/Locker.Styles';

function App() {
  return (
    <AppWrapper>
      <LockerWrapper>
        <KeyPad />
        <RightItemsWrapper direction="column">
          <DisplayPanel />
          <Indicator />
        </RightItemsWrapper>
      </LockerWrapper>
    </AppWrapper>
  );
}

export default App;
