/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import Link from 'next/link';

import { SimpleCard } from 'components/organisms/CategoryCard';
import { Grid, Typography } from '@mui/material';

const Categories: FC<any> = (props) => {
  const { categories } = props;

  return (
    <Grid container spacing={2}>
      {categories.map(({ title, description, id }: any) => (
        <Grid key={id} item sm={2}>
          <Link href={`detail/${id}`}>
            <SimpleCard key={title}>
              <Typography variant="body1" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2">
                {description}
              </Typography>
            </SimpleCard>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getStaticProps() {
  return {
    props: {
      categories: new Array(20)
        .fill(null)
        .map((_, index) => ({
          description: `Description ${index}`,
          id: index,
          title: `Title ${index}`,
        })),
    },
  };
}

export default Categories;
