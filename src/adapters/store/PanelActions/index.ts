import { action, makeObservable, observable } from 'mobx';
import isEqual from 'lodash/fp/isEqual';

import { PanelAction } from 'application/PanelActions/ports';
import { not } from 'crocks';
import { PanelActionsModel } from './types';

class PanelActions implements PanelActionsModel {

  constructor() {
    makeObservable(this);
  }

  @observable panelActions: PanelAction[] = [];

  @action.bound
  public addPanelAction(panelAction: PanelAction): void {
    this.panelActions = [...this.panelActions, panelAction];
  }

  @action.bound
  public removePanelAction(panelAction: PanelAction): void {
    const isNotEqualTo = not(isEqual(panelAction));

    this.panelActions = this.panelActions.filter(isNotEqualTo);
  }

}

export default PanelActions;
