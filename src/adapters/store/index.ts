import PanelActions from './PanelActions';

export class RootStore {

  public panelActions: PanelActions;

  constructor() {
    this.panelActions = new PanelActions();
  }

}

export const store = new RootStore();
