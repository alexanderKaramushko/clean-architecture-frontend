import Drawers from './Drawers';
import PanelActions from './PanelActions';

export class RootStore {

  public drawers: Drawers;
  public panelActions: PanelActions;

  constructor() {
    this.drawers = new Drawers();
    this.panelActions = new PanelActions();
  }

}

export const store = new RootStore();
