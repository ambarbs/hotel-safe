import React, { useState } from 'react';
import { KeyPad } from './KeyPad/KeyPad';
import { RightItemsWrapper } from '../App/App.Styles';
import { DisplayPanel } from './DisplayPanel/DisplayPanel';
import { Indicator } from './DisplayPanel/DisplayPanel.Styles';
import { LockerWrapper } from './Locker.Styles';

export function Locker() {
  const [currentInput, setCurrentInput] = useState('');
  const [lockerPIN, setLockerPIN] = useState('');
  const [locked, setLocked] = useState(false);

  return (
    <LockerWrapper>
      <KeyPad
        setCurrentInput={setCurrentInput}
        currentInput={currentInput}
        setLockerPIN={setLockerPIN}
        lockerPIN={lockerPIN}
        setLocked={setLocked}
        locked={locked}
      />
      <RightItemsWrapper direction="column">
        <DisplayPanel currentInput={currentInput} />
        <Indicator bgColor={locked ? 'red' : 'green'} />
      </RightItemsWrapper>
    </LockerWrapper>
  );
}
