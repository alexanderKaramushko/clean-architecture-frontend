import { ReactNode } from 'react';

export interface PanelAction {
  Component: ReactNode;
}

export interface PanelActionImpl {
  panelActions: PanelAction[];
  addPanelAction: (panelAction: PanelAction) => PanelAction;
  removePanelAction: (panelAction: PanelAction) => PanelAction;
}
