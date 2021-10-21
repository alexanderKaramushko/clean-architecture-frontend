import Image from 'next/image';
import React, { FC } from 'react';

const Main: FC<any> = (props) => {
  const { post } = props;

  return (
    <div>
      <h1>
        {post?.title}
      </h1>
      <Image
        src="/static/images/example.png"
        alt="Onepiece image"
        width={500}
        height={500}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [],
  };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
    const post = await response.json();

    return {
      props: {
        pid,
        post,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        pid,
        post: {},
      },
      revalidate: 1,
    };
  }
}

export default Main;
