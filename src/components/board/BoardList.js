import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles(() => ({
  root: {},
}));

const BoardList = (props) => {
  const { className, display } = props;
  const classes = useStyles();
  const { _id, name, description, board_type } = display;

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
          <Link to={`/board/${_id}`}>
        <Box>
          <Grid item xs={6}>
          {
                board_type === 'private' ? 
                <VisibilityOffIcon
                color="secondary"
                /> :
                null
            }
            <Typography color="textPrimary" gutterBottom variant="h2">
              {name}
            </Typography>

            <Typography color="textPrimary" gutterBottom variant="h5">
              {description}
            </Typography>
          </Grid>
        </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

BoardList.propTypes = {
  className: PropTypes.string,
};

export default connect((state) => state.userBoard)(BoardList);
