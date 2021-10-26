import React, { FC, ReactElement } from 'react';

import AppBar from 'components/organisms/AppBar/Container';
import ActionsPanel from 'components/organisms/ActionsPanel/Container';

import { Box } from '@mui/system';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => (
  <>
    <AppBar>
      <ActionsPanel />
    </AppBar>
    <Box my={8} mx={6}>
      {children}
    </Box>
  </>
);

Layout.displayName = 'Layout';
