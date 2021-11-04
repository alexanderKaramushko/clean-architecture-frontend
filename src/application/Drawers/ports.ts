import { ReactNode } from 'react';

export interface Drawer {
  id?: string;
  Component: ReactNode;
  [key: string]: unknown;
}

export interface DrawersImpl {
  drawers: Drawer[];
  addDrawer: (drawer: Drawer) => Drawer;
  toggleDrawer: (drawer: Drawer | string) => Drawer | string;
  removeDrawer: (drawer: Drawer | string) => Drawer | string;
}
