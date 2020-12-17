import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const Group = (props) => {
  const { className, display } = props;

  const classes = useStyles();
//   const { id, name, description } = display;

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Box 
          >
          <Grid item xs={6}>
            <Typography color="textPrimary" gutterBottom variant="h2">
             Group Title
            </Typography>
          </Grid>
          <Grid item xs={6}>
              </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default connect((state) => state.board)(Group);
