import React, { useState } from 'react';
import { KeyPad } from './KeyPad/KeyPad';
import { RightItemsWrapper } from '../App/App.Styles';
import { DisplayPanel } from './DisplayPanel/DisplayPanel';
import { Indicator } from './DisplayPanel/DisplayPanel.Styles';
import { LockerWrapper } from './Locker.Styles';

export function Locker() {
  const [currentInputs, setCurrentInputs] = useState([]);
  const [lockerPIN, setLockerPIN] = useState(['']);
  const [locked, setLocked] = useState(false);

  return (
    <LockerWrapper>
      <KeyPad
        setCurrentInputs={setCurrentInputs}
        currentInputs={currentInputs}
        setLockerPIN={setLockerPIN}
        lockerPIN={lockerPIN}
        setLocked={setLocked}
        locked={locked}
      />
      <RightItemsWrapper direction="column">
        <DisplayPanel currentInputs={currentInputs} />
        <Indicator bgColor={locked ? 'red' : 'green'} />
      </RightItemsWrapper>
    </LockerWrapper>
  );
}
