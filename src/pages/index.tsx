import Head from "next/head";
import React from "react";

import AppBar from 'components/organisms/AppBar';

const IndexPage = () => (
  <>
    <Head>
      <title>One piece</title>
      <meta
        name="description"
        content="Onepiece SSR"
      />
    </Head>
    <AppBar />
  </>
);

export default IndexPage;
