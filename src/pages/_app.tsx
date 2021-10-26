/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

import 'assets/styles/global.scss';
import { CssBaseline } from '@mui/material';

import StoreProvider from 'adapters/store/StoreProvider';
import { store } from 'adapters/store';

import { Layout } from 'components/organisms/Layout';

const _App = ({ Component, pageProps }: any): ReactElement => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <title>Onepiece</title>
    </Head>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  </>
);

export default _App;
