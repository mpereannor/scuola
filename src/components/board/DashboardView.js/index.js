import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import Page from '../../Page';
import BoardDetails from '../BoardDetails';
import Board from '../Board';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
    const classes = useStyles();
  
    return (
      <Page
        className={classes.root}
        title="Dashboard"
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
            <BoardDetails />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Board/>
            </Grid>
          </Grid>
        </Container>
      </Page>
    );
  };
  
  export default Dashboard;
  