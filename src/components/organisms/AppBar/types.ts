import { PropsWithChildren } from 'react';

import { LinkGroup } from 'domain/index';
import { PanelActionImpl } from 'application/PanelActions/ports';
import { AppBarProps as MaterialAppBarProps } from '@mui/material';

export type AppBarStoreProps = Partial<PanelActionImpl> & {
  linkGroups: LinkGroup[];
};

export type AppBarOwnProps = PropsWithChildren<MaterialAppBarProps>;

export type AppBarProps = AppBarStoreProps & AppBarOwnProps;
