import React, { FC, ReactElement } from 'react';
import map from 'lodash/fp/map';

import { Grid } from '@mui/material';

import { ActionsPanelProps, PanelAction } from './types';

const ActionsPanel: FC<ActionsPanelProps> = (props): ReactElement => {
  const { panelActions = [] } = props;

  function renderAction(panelAction: PanelAction): ReactElement {
    return (
      <Grid item xs="auto">
        {panelAction.Component}
      </Grid>
    );
  }

  const renderActions = map(renderAction);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
    >
      {renderActions(panelActions)}
    </Grid>
  );
};

ActionsPanel.displayName = 'ActionsPanel';

export default ActionsPanel;
