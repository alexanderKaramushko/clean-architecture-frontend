import Head from 'next/head';
import React, { ReactElement } from 'react';

import StoreProvider from 'adapters/store/StoreProvider';
import { store } from 'adapters/store';

import AppBar from 'components/organisms/AppBar/Container';
import ActionsPanel from 'components/organisms/ActionsPanel/Container';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>One piece</title>
      <meta
        name="description"
        content="Onepiece SSR"
      />
    </Head>
    <StoreProvider store={store}>
      <AppBar>
        <ActionsPanel />
      </AppBar>
    </StoreProvider>
  </>
);

export default IndexPage;
