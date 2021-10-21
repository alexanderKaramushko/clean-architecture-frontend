import { ButtonBaseTypeMap } from '@mui/material';

export type ButtonProps = ButtonBaseTypeMap['props'] & {
  [key: string]: unknown;
};
