import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { 
    getBoards
} from '../../state/board';
import {
  Container,
  Box,
  makeStyles,
  CircularProgress
} from '@material-ui/core';

import BoardList from './BoardList';
import { Transition } from '../Loader'
const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const BoardView = props => { 
    const { 
        className,
        isFetching, 
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
                {displayBoard && displayBoard.length > 0
                 ? 
                 displayBoard.map((display) => (
                     <BoardList
                     key={display.id}
                     display={display} 
                     />
                 ))
                 :
                 <div
                    style={{
                        "margin" : "auto",
                        "width" : " 50%",
                    }}
                 >

                 <Transition/>
                 </div>

           
                 }
                
                
            {/* ))}  */}
        </Container>
      );
};

BoardView.propTypes = {
    className: PropTypes.string
  };
  
export default connect(state => { 
    return { 
        displayBoard: state.userBoard.displayBoard,

    }
}, {getBoards })(BoardView);