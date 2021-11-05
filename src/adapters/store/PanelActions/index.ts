import { action, makeObservable, observable } from 'mobx';

import { notEqual } from 'utils/fp';

import { PanelAction } from 'application/PanelActions/ports';
import { PanelActionsModel } from './types';

class PanelActions implements PanelActionsModel {

  constructor() {
    makeObservable(this);
  }

  @observable panelActions: PanelAction[] = [];

  @action.bound
  public addPanelAction(panelAction: PanelAction): PanelAction {
    this.panelActions = [...this.panelActions, panelAction];

    return panelAction;
  }

  @action.bound
  public removePanelAction(panelAction: PanelAction): PanelAction {
    this.panelActions = this.panelActions.filter(notEqual(panelAction));

    return panelAction;
  }

}

export default PanelActions;
