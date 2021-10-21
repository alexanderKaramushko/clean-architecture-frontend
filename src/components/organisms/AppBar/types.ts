import { PropsWithChildren } from 'react';
import { PanelActionImpl } from 'application/PanelActions/ports';

export type AppBarStoreProps = Partial<PanelActionImpl>;

export type AppBarOwnProps = PropsWithChildren<{}>;

export type AppBarProps = AppBarStoreProps & AppBarOwnProps;
