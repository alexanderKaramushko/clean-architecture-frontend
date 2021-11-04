import { store } from 'adapters/store';
import { PanelAction, PanelActionImpl } from './ports';

export function addPanelActionCase(panelAction: PanelAction): PanelAction {
  const { addPanelAction }: PanelActionImpl = store.panelActions;

  return addPanelAction(panelAction);
}

export function removePanelActionCase(panelAction: PanelAction): PanelAction {
  const { removePanelAction }: PanelActionImpl = store.panelActions;

  return removePanelAction(panelAction);
}
