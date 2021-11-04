import { ReactNode } from 'react';

export interface Drawer {
  id?: string;
  Component: ReactNode;
  [key: string]: unknown;
}

export interface DrawersImpl {
  drawers: Drawer[];
  addDrawer: (drawer: Drawer) => Drawer;
  toggleDrawer: (drawer: Drawer) => Drawer;
  removeDrawer: (drawer: Drawer) => Drawer;
}
