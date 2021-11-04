/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC,
  ReactElement,
  useEffect,
  useState,
  MouseEvent } from 'react';
import curry from 'lodash/fp/curry';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Attachment from '@mui/icons-material/Attachment';
import { IconButton,
  Toolbar,
  Grid,
  Typography,
  AppBar as MaterialAppBar } from '@mui/material';
import { TreeView, TreeItem } from '@material-ui/lab';
import { Drawer } from 'application/Drawers/ports';

import { PanelAction } from 'application/PanelActions/ports';
import { LinkGroup, Link } from 'domain/index';
import { AppBarProps } from './types';

// todo move recursive tree view to separate component
const AppBar: FC<AppBarProps> = (props): ReactElement => {
  const {
    addDrawer = identity,
    addPanelAction = identity,
    toggleDrawer = identity,
    children, linkGroups,
  } = props;

  const [linksDrawer, setLinksDrawer] = useState<Drawer | undefined>();

  const attachAction = curry(
    (panelAction: PanelAction, event: MouseEvent<HTMLButtonElement>) => addPanelAction(panelAction),
  );

  function renderLinks(links: Link[]): ReactElement[] {
    return links.map(({ title, nested }) => (
      <TreeItem
        nodeId={title}
        key={title}
        label={(
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{
              px: 2,
            }}
          >
            <Grid item xs="auto">
              <Typography>{title}</Typography>
            </Grid>
            <Grid item xs="auto">
              <IconButton
                onClick={attachAction({ Component: title })}
                edge="end"
                aria-label="delete"
              >
                <Attachment />
              </IconButton>
            </Grid>
          </Grid>
        )}
      >
        {nested ? renderLinks(nested) : null}
      </TreeItem>
    ));
  }

  function renderLinkGroup({ title, links }: LinkGroup): ReactElement {
    return (
      <TreeItem
        nodeId={title}
        key={title}
        label={<Typography variant="h3">{title}</Typography>}
      >
        {renderLinks(links)}
      </TreeItem>
    );
  }

  const renderLinkGroups = map(renderLinkGroup);

  useEffect(() => {
    const drawer = addDrawer({
      Component: (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderLinkGroups(linkGroups)}
        </TreeView>
      ),
      SlideProps: {
        style: {
          padding: '42px 24px',
        },
      },
      anchor: 'left',
    });

    setLinksDrawer(drawer);
  }, []);

  return (
    <>
      <MaterialAppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            onClick={(): void => {
              if (linksDrawer) {
                toggleDrawer(linksDrawer);
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </MaterialAppBar>
    </>
  );
};

AppBar.displayName = 'AppBar';

export default AppBar;
