/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';

import { Typography } from '@mui/material';

const Category: FC<any> = (props) => {
  const { post = {} } = props;
  const { body, title } = post;

  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [],
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps({ params }: any) {
  const { id } = params;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return {
      props: {
        id,
        post,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        id,
        post: {},
      },
      revalidate: 1,
    };
  }
}

export default Category;
