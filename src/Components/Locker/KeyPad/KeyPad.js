import PropTypes from 'prop-types';
import { KeyPadGrid, KeyWrapper } from './KeyPad.Styles';

export const KeyPad = ({
  setCurrentInput, currentInput, setLockerPIN, lockerPIN, setLocked, locked,
}) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', '⇨'];

  const handleKeyPress = (key) => {
    if (key === 'CLR') {
      setCurrentInput('');
      return;
    }
    if (key === '⇨') {
      if (locked) {
        // PIN matches
        if (lockerPIN === currentInput) {
          setLockerPIN('');
          setLocked(false);
        } else { // Invalid PIN
          setCurrentInput('INVALID');
        }
      } else if (!locked && currentInput.length === 4) {
        setLockerPIN(currentInput);
        setLocked(true);
      }
      return;
    }
    setCurrentInput(`${currentInput}${key}`.substr(-4));
  };

  return (
    <KeyPadGrid>
      {keys.map((key) => (
        <KeyWrapper
          key={key}
          onClick={() => {
            handleKeyPress(key);
          }}
        >
          {key}
        </KeyWrapper>
      ))}
    </KeyPadGrid>
  );
};

KeyPad.propTypes = {
  currentInput: PropTypes.string.isRequired,
  lockerPIN: PropTypes.string.isRequired,
  setCurrentInput: PropTypes.func.isRequired,
  setLockerPIN: PropTypes.func.isRequired,
  setLocked: PropTypes.func.isRequired,
  locked: PropTypes.bool.isRequired,
};
