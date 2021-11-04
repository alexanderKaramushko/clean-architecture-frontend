import { ReactNode } from 'react';
import { PanelActionImpl } from 'application/PanelActions/ports';
import { DrawersImpl } from 'application/Drawers/ports';

export interface PanelAction {
  Component: ReactNode;
}

export type ActionsPanelStoreProps = Partial<PanelActionImpl> & Partial<DrawersImpl>;

export type ActionsPanelOwnProps = {};

export type ActionsPanelProps = ActionsPanelStoreProps & ActionsPanelOwnProps;
