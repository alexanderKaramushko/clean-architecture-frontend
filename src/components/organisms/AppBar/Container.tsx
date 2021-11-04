import React from 'react';
import { observer } from 'mobx-react';

import { addPanelActionCase } from 'application/PanelActions';
import { addDrawerCase, removeDrawerCase, toggleDrawerCase } from 'application/Drawers';
import { LinkGroups } from './_mock';

import { AppBarOwnProps } from './types';

import AppBar from '.';

export default observer((props: AppBarOwnProps) => (
  <AppBar
    addDrawer={addDrawerCase}
    addPanelAction={addPanelActionCase}
    linkGroups={LinkGroups}
    removeDrawer={removeDrawerCase}
    toggleDrawer={toggleDrawerCase}
    {...props}
  />
));
