import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { StoreContext } from 'adapters/store/StoreProvider';

import { Drawer } from '@mui/material';

export default observer(() => {
  const { drawers } = useContext(StoreContext);

  return (
    <>
      {drawers.drawers.map(({ Component, ...props }, drawerIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Drawer {...props} key={drawerIndex}>
          {Component}
        </Drawer>
      ))}
    </>
  );
});
