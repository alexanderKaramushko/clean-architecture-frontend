import { store } from 'adapters/store';
import { PanelAction, PanelActionImpl } from './ports';

export function addPanelActionCase(panelAction: PanelAction): PanelAction {
  const { addPanelAction }: PanelActionImpl = store.panelActions;

  addPanelAction(panelAction);

  return panelAction;
}

export function removePanelActionCase(panelAction: PanelAction): PanelAction {
  const { removePanelAction }: PanelActionImpl = store.panelActions;

  removePanelAction(panelAction);

  return panelAction;
}
