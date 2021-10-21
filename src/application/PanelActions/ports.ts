import { ReactNode } from 'react';

export interface PanelAction {
  Component: ReactNode;
}

export interface PanelActionImpl {
  panelActions: PanelAction[];
  addPanelAction: (panelAction: PanelAction) => void;
  removePanelAction: (panelAction: PanelAction) => void;
}
