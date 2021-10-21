import React from 'react';
import { observer } from 'mobx-react';

import { addPanelActionCase } from 'application/PanelActions';
import { AppBarOwnProps } from './types';

import AppBar from '.';

export default observer((props: AppBarOwnProps) => (
  <AppBar
    addPanelAction={addPanelActionCase}
    {...props}
  />
));
