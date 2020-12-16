import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const BoardSingle = props => { 
    const { 
        className,
        display       
    } = props;

    console.log('green', props);

    const classes = useStyles();
    const { id, name, description } = display;
    console.log('grades', display)
    

    return (
        <Card
        className={clsx(classes.root, className)}
        >
        <CardContent>
        <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
        >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
            >
            {name}
            </Typography>

            <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
            >
            {description}
            </Typography>
        </Box>
        </CardContent>
    </Card>        
      );
};

BoardSingle.propTypes = {
    className: PropTypes.string
  };
  
export default connect(state => state.board )(BoardSingle);