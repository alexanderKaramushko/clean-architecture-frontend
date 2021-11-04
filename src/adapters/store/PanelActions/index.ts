import { action, makeObservable, observable } from 'mobx';
import isEqual from 'lodash/fp/isEqual';
import { not } from 'crocks';

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
    const isNotEqualTo = not(isEqual(panelAction));

    this.panelActions = this.panelActions.filter(isNotEqualTo);

    return panelAction;
  }

}

export default PanelActions;
