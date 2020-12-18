import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Group from './Group';
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const BoardSingle = (props) => {
  const { className, display } = props;

  console.log("green", props);

  const classes = useStyles();
  const { id, name, description } = display;
  console.log("grades", display);

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Box 
        // alignItems="left"
        //  display="flex"
        //   flexDirection="column"
          >
          <Grid item xs={6}>
            <Typography color="textPrimary" gutterBottom variant="h2">
              {name}
            </Typography>

            <Typography color="textPrimary" gutterBottom variant="h5">
              {description}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Grid item xs={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
              >
                New Item
              </Button>
            </Grid>
            <Grid item xs={3}>
              <AccountCircleIcon />
            </Grid>
            <Grid item xs={3}>
              <h5>searchbar</h5>
            </Grid>
            <Grid item xs={3}>
              4th icon
            </Grid>
          </Grid>
          <Box>
              <Group
                groupDisplay={display}
              />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

BoardSingle.propTypes = {
  className: PropTypes.string,
};

export default connect((state) => state.board)(BoardSingle);
