/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

import 'assets/styles/global.scss';
import { CssBaseline, LinearProgress } from '@mui/material';

import StoreProvider from 'adapters/store/StoreProvider';
import { store } from 'adapters/store';

import { Layout } from 'components/organisms/Layout';

const _App = ({ Component, pageProps }: any): ReactElement => {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));

  return (
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
          {loading && <LinearProgress color="secondary" />}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default _App;
