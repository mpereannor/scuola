import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { 
    getBoards
} from '../../state/board';
import {
  Container,
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
        getBoards, 
        
    } = props;

    const classes = useStyles();
    
    useEffect(() => { 
        getBoards();
    }, []);

    return (
        <Container
        className={clsx(classes.root, className)}
        >
            {displayBoard.map((display) => (
                <BoardSingle
                    key={display.id}
                    display={display}   
                />
            ))} 
        </Container>
      );
};

Board.propTypes = {
    className: PropTypes.string
  };
  
export default connect(state => { 
    return { 
        displayBoard: state.board.displayBoard,

    }
}, {getBoards })(Board);