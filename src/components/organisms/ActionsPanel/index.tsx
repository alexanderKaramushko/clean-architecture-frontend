/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, MouseEvent, useEffect } from 'react';
import map from 'lodash/fp/map';
import curry from 'lodash/fp/curry';
import identity from 'lodash/fp/identity';

import DeckIcon from '@mui/icons-material/Deck';
import RemoveIcon from '@mui/icons-material/Remove';

import { Grid, Chip, IconButton } from '@mui/material';

import { ActionsPanelProps, PanelAction } from './types';

const ActionsPanel: FC<ActionsPanelProps> = (props): ReactElement => {
  const {
    addDrawer = identity,
    panelActions = [],
    removePanelAction = identity,
    toggleDrawer = identity,
  } = props;

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

  useEffect(() => {
    const drawer = {
      Component: (
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          {renderActions(panelActions)}
        </Grid>
      ),
      SlideProps: {
        style: {
          padding: '24px',
        },
      },
      anchor: 'top',
      id: 'actionsDrawer',
    };

    addDrawer(drawer);
  }, [panelActions]);

  return (
    <IconButton
      onClick={(): void => {
        toggleDrawer('actionsDrawer');
      }}
    >
      <DeckIcon />
    </IconButton>
  );
};

ActionsPanel.displayName = 'ActionsPanel';

export default ActionsPanel;
