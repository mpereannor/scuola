import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getBoard } from "../../state/board";
import PropTypes from "prop-types";
import Group from "./Group";
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
  const { className, displaySingleBoard, getBoard } = props;
  const { name, description, groups } = displaySingleBoard;
  const { boardId } = useParams();

  useEffect(() => {
    getBoard(boardId);
  }, [getBoard, boardId]);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Box>
          <Grid item xs={6} key={displaySingleBoard.id}>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
              >
                New Group of Items
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
            {groups && groups.length > 0
              ? groups.map((group) => (
                  <Group key={group._id} groupDisplay={group} />
                ))
              : "Loading..."}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

BoardSingle.propTypes = {
  className: PropTypes.string,
};

export default connect(
  (state) => {
    return {
      displaySingleBoard: state.userBoard.displaySingleBoard,
    };
  },
  { getBoard }
)(BoardSingle);
