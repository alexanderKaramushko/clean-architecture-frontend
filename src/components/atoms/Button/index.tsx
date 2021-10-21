import React, { FC, ReactElement } from 'react';

import { Button as MaterialButton } from '@material-ui/core';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props): ReactElement => {
  const { children, ...buttonProps } = props;

  return (
    <MaterialButton
      {...buttonProps}
    >
      {children}
    </MaterialButton>
  );
};

Button.displayName = 'MaterialButton';

export default Button;
