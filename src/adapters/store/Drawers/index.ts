import { action, makeObservable, observable } from 'mobx';
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/uniqueId';

import { not } from 'crocks';

import { Drawer } from 'application/Drawers/ports';
import { DrawersModel } from './types';

class Drawers implements DrawersModel {

  constructor() {
    makeObservable(this);
  }

  @observable drawers: Drawer[] = [];

  @action.bound
  public addDrawer(drawer: Drawer): Drawer {
    const drawerWithId: Drawer = {
      id: uniqueId(),
      ...drawer,
    };

    this.drawers = [
      ...this.drawers,
      {
        ...drawerWithId,
        onClose: (): void => {
          this.toggleDrawer(drawerWithId);

          if (drawer.onClose) {
            // todo fix any
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (drawer as any).onClose();
          }
        },
      },
    ];

    return drawerWithId;
  }

  @action.bound
  public removeDrawer(drawer: Drawer): Drawer {
    const isNotEqualTo = not(isEqual(drawer));

    this.drawers = this.drawers.filter(isNotEqualTo);

    return drawer;
  }

  @action.bound
  public toggleDrawer(drawerToToggle: Drawer): Drawer {
    this.drawers = this.drawers.reduce<Drawer[]>((drawers, drawer) => {
      if (drawer.id === drawerToToggle.id) {
        return [
          ...drawers,
          {
            ...drawer,
            open: !drawer.open,
          },
        ];
      }
      return drawers;
    }, []);

    return drawerToToggle;
  }

}

export default Drawers;
