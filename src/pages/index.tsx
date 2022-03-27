import Head from 'next/head';
import React, { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>One piece</title>
      <meta
        name="description"
        content="Onepiece SSR"
      />
    </Head>
    <div>Version: %%VERSION%%</div>
  </>
);

export default IndexPage;
