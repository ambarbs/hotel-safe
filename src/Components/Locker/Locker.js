import React from 'react';
import { KeyPad } from './KeyPad/KeyPad';
import { RightItemsWrapper } from '../App/App.Styles';
import { DisplayPanel } from './DisplayPanel/DisplayPanel';
import { Indicator } from './DisplayPanel/DisplayPanel.Styles';
import { LockerWrapper } from './Locker.Styles';

export function Locker() {
  return (
    <LockerWrapper>
      <KeyPad />
      <RightItemsWrapper direction="column">
        <DisplayPanel />
        <Indicator />
      </RightItemsWrapper>
    </LockerWrapper>
  );
}
