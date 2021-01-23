import { KeyPadGrid, KeyWrapper } from './KeyPad.Styles';
import { keys } from './utils';

export const KeyPad = () => (
  <KeyPadGrid>
    {keys.map((key) => <KeyWrapper key={key}>{key}</KeyWrapper>)}
  </KeyPadGrid>
);
