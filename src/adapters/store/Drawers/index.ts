import { action, makeObservable, observable } from 'mobx';
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/uniqueId';
import uniqBy from 'lodash/uniqBy';
import get from 'lodash/fp/get';
import compose from 'lodash/fp/compose';

import { not } from 'crocks';

import { Drawer } from 'application/Drawers/ports';
import { DrawersModel } from './types';

class Drawers implements DrawersModel {

  constructor() {
    makeObservable(this);
  }

  @observable drawers: Drawer[] = [];

  @action.bound
  public addDrawer(newDrawer: Drawer): Drawer {
    const id = newDrawer.id || uniqueId();
    const drawerWithId: Drawer = {
      ...newDrawer,
      id,
      onClose: (): void => {
        this.toggleDrawer(id);

        if (newDrawer.onClose) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (newDrawer as any).onClose();
        }
      },
    };

    const existingDrawer = this.drawers
      .find((drawer) => drawer.id === drawerWithId.id);

    if (existingDrawer) {
      this.drawers = this.drawers.map((drawer) => (
        drawer.id === id
          ? ({ ...drawer, ...drawerWithId })
          : drawer
      ));
    } else {
      this.drawers = uniqBy([
        ...this.drawers,
        drawerWithId,
      ], 'id');
    }

    return drawerWithId;
  }

  @action.bound
  public removeDrawer(drawer: Drawer | string): Drawer | string {
    const id = get('id', drawer) ?? drawer;
    const isNotEqualToId = compose(not(isEqual(id)), get('id'));

    this.drawers = this.drawers.filter(isNotEqualToId);

    return drawer;
  }

  @action.bound
  public toggleDrawer(drawerToToggle: Drawer | string): Drawer | string {
    const id = get('id', drawerToToggle) ?? drawerToToggle;

    this.drawers = this.drawers.map((drawer) => (
      drawer.id === id
        ? ({ ...drawer, open: !drawer.open })
        : drawer
    ));

    return drawerToToggle;
  }

}

export default Drawers;
