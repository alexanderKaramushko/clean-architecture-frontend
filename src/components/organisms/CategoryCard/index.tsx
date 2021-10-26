import React, { FC, ReactElement } from 'react';

import { Card, CardContent, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SimpleCardProps } from './types';

// todo move StyledPaper to separate component
const StyledPaper = styled(Paper)(({ theme }) => ({
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
  boxShadow: theme.shadows[3],
}));

export const SimpleCard: FC<SimpleCardProps> = ({ children, ...props }): ReactElement => (
  <StyledPaper>
    <Card {...props}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </StyledPaper>
);

SimpleCard.displayName = 'CategoryCard';
