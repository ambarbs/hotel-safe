import PropTypes from 'prop-types';
import { DisplayPanelWrapper } from './DisplayPanel.Styles';

export const DisplayPanel = ({ currentInputs }) => (
  <DisplayPanelWrapper>
    {/* eslint-disable-next-line react/no-array-index-key */}
    {currentInputs.map((i, index) => <span key={index}>{i}</span>)}
  </DisplayPanelWrapper>
);

DisplayPanel.propTypes = {
  currentInputs: PropTypes.arrayOf(PropTypes.string),
};

DisplayPanel.defaultProps = {
  currentInputs: [''],
};
