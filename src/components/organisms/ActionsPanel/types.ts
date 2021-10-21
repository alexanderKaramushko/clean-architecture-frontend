import { ReactNode } from 'react';
import { PanelActionImpl } from 'application/PanelActions/ports';

export interface PanelAction {
  Component: ReactNode;
}

export type ActionsPanelStoreProps = Partial<PanelActionImpl>;

export type ActionsPanelOwnProps = {};

export type ActionsPanelProps = ActionsPanelStoreProps & ActionsPanelOwnProps;
