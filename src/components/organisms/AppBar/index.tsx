import React, { FC, ReactElement, useState, KeyboardEvent, MouseEvent } from 'react';
import curry from 'lodash/fp/curry';

import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, Drawer, IconButton, ListItemText } from '@mui/material';

import styles from './styles.module.scss';

const AppBar: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = curry((isOpen: boolean, _: KeyboardEvent | MouseEvent) => {
    setOpen(isOpen);
  });

  return (
    <>
      <IconButton
        onClick={toggleDrawer(!open)}
        className={styles.open}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        onClose={toggleDrawer(false)}
        open={open}
      >
        <List sx={{ mt: 8 }}>
          <ListItem button key='static'>
            <ListItemText primary='Раздел 1' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

AppBar.displayName = 'AppBar';

export default AppBar;
