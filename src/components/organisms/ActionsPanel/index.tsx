/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, MouseEvent } from 'react';
import map from 'lodash/fp/map';
import curry from 'lodash/fp/curry';
import identity from 'lodash/fp/identity';

import { Grid, Chip, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

import { ActionsPanelProps, PanelAction } from './types';

const ActionsPanel: FC<ActionsPanelProps> = (props): ReactElement => {
  const { panelActions = [], removePanelAction = identity } = props;

  const removeAction = curry(
    (panelAction: PanelAction, event: MouseEvent<HTMLButtonElement>) => removePanelAction(panelAction),
  );

  function renderAction(panelAction: PanelAction): ReactElement {
    return (
      <Grid item xs="auto">
        <Chip label={panelAction.Component} />
        <IconButton onClick={removeAction(panelAction)}>
          <RemoveIcon />
        </IconButton>
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
