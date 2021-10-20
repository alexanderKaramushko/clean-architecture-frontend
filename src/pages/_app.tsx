import Head from "next/head";
import React from "react";

import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';

import 'assets/styles/global.scss';

const _App = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <title>Onepiece</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default _App;
