import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { 
    getBoards
} from '../../state/board';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import BoardSingle from './BoardSingle'

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Board = props => { 
    const { 
        className, 
        displayBoard,
        getBoards
    } = props;

    console.log('green', props);

    const classes = useStyles();
    
    useEffect(() => { 
        getBoards();
    }, [getBoards]);

    return (
        <Container
        className={clsx(classes.root, className)}
        >
            {displayBoard.map(board => (
                <BoardSingle
                    key={board.id}
                    board={board}   
                />
            ))} 
        </Container>
      );
};

Board.propTypes = {
    className: PropTypes.string
  };
  
export default connect(state => state.board, { getBoards })(Board);