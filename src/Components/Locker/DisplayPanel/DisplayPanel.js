import { DisplayPanelWrapper } from './DisplayPanel.Styles';

export const DisplayPanel = () => (
  <DisplayPanelWrapper>
    {[1, 2, 3, 4].map((i) => <span>{i}</span>)}
  </DisplayPanelWrapper>
);
