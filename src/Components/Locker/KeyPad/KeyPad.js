import PropTypes from 'prop-types';
import { KeyPadGrid, KeyWrapper } from './KeyPad.Styles';
import { keys } from './utils';

export const KeyPad = ({
  setCurrentInputs, currentInputs, setLockerPIN, lockerPIN, setLocked, locked,
}) => {
  const handleKeyPress = (key) => {
    if (key === 'CLR') {
      setCurrentInputs([]);
      return;
    }
    if (key === '⇨') {
      if (locked) {
        // if PIN matches
        if (lockerPIN.every((i, index) => i === currentInputs[index])) {
          setLockerPIN([]);
          setLocked(false);
        } else {
          setCurrentInputs(['I', 'N', 'V', 'A', 'L', 'I', 'D']);
        }
      } else if (!locked && currentInputs.length === 4) {
        setLockerPIN([...currentInputs]);
        setLocked(true);
      }
      // setCurrentInputs([]);
      return;
    }
    setCurrentInputs([...currentInputs, key].slice(-4));
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
  currentInputs: PropTypes.arrayOf(PropTypes.string),
  lockerPIN: PropTypes.arrayOf(PropTypes.string),
  setCurrentInputs: PropTypes.func.isRequired,
  setLockerPIN: PropTypes.func.isRequired,
  setLocked: PropTypes.func.isRequired,
  locked: PropTypes.bool.isRequired,
};

KeyPad.defaultProps = {
  currentInputs: [''],
  lockerPIN: [''],
};
