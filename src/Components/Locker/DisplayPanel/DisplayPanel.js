import PropTypes from 'prop-types';
import { DisplayPanelWrapper } from './DisplayPanel.Styles';

export const DisplayPanel = ({ currentInput }) => (
  <DisplayPanelWrapper>
    {currentInput.split('').map((i, index) => <span key={`${i}-${index}`}>{i}</span>)}
  </DisplayPanelWrapper>
);

DisplayPanel.propTypes = {
  currentInput: PropTypes.string.isRequired,
};
