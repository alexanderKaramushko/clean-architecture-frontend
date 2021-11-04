import { store } from 'adapters/store';
import { Drawer, DrawersImpl } from './ports';

export function addDrawerCase(drawer: Drawer): Drawer {
  const { addDrawer }: DrawersImpl = store.drawers;

  return addDrawer(drawer);
}

export function removeDrawerCase(drawer: Drawer): Drawer {
  const { removeDrawer }: DrawersImpl = store.drawers;

  return removeDrawer(drawer);
}

export function toggleDrawerCase(drawer: Drawer): Drawer {
  const { toggleDrawer }: DrawersImpl = store.drawers;

  return toggleDrawer(drawer);
}
