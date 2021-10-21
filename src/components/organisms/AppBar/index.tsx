/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC,
  ReactElement,
  useState,
  KeyboardEvent, MouseEvent } from 'react';
import curry from 'lodash/fp/curry';
import identity from 'lodash/fp/identity';

import MenuIcon from '@mui/icons-material/Menu';
import Attachment from '@mui/icons-material/Attachment';
import { List,
  ListItem,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemSecondaryAction,
  Toolbar,
  AppBar as MaterialAppBar } from '@mui/material';

import { Button } from 'components/atoms';
import { PanelAction } from 'application/PanelActions/ports';
import { AppBarProps } from './types';

const AppBar: FC<AppBarProps> = (props): ReactElement => {
  const { addPanelAction = identity, children } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = curry((isOpen: boolean, _: KeyboardEvent | MouseEvent) => {
    setOpen(isOpen);
  });

  const attachAction = curry(
    (panelAction: PanelAction, event: MouseEvent<HTMLDivElement>) => addPanelAction(panelAction),
  );

  return (
    <>
      <MaterialAppBar position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer(!open)}>
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </MaterialAppBar>
      <Drawer
        anchor="left"
        onClose={toggleDrawer(false)}
        open={open}
      >
        <List>
          <ListItem>
            <ListItemButton
              color="primary"
              variant="contained"
              component={Button}
            >
              Раздел 1
            </ListItemButton>
            <ListItemSecondaryAction>
              <IconButton
                onClick={attachAction({ Component: <div>Действие Раздела 1</div> })}
                edge="end"
                aria-label="delete"
              >
                <Attachment />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemButton
              color="primary"
              variant="contained"
              component={Button}
            >
              Раздел 2
            </ListItemButton>
            <ListItemSecondaryAction>
              <IconButton
                onClick={attachAction({ Component: <div>Действие Раздела 2</div> })}
                edge="end"
                aria-label="delete"
              >
                <Attachment />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

AppBar.displayName = 'AppBar';

export default AppBar;
