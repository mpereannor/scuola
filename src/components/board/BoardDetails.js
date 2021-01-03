import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createBoard } from '../../state/board';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Radio, Typography, Container, Box, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: "100%",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      "& .MuiOutlinedInput-root": {
        "& fieldset": { 
            borderRadius : "2px",
            borderWidth: "0.15em"
        },
        "&.Mui-focused fieldset" : { 
            border: "0.2em solid #011628"
        }
    },
    },
  }));
  


const BoardDetails = (props) => {
  const classes = useStyles();
  const [ selectedValue, setSelectedValue ] = useState('public');
  const handleChange = (event) => { 
      setSelectedValue(event.target.value);
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => props.createBoard(data);

  return (
        <Card variant="outlined"> 
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <Box>

            <Box m={2}>
                <TextField
                id="name"
                inputRef={register}
                name="name"
                label="name"
                variant="outlined"
                required
                inputProps={{ maxLength: 20 }}
                />   
            </Box>
            <Box m={2}>
                <TextField
                id="description"
                inputRef={register}
                name="description"
                label="description"
                variant="outlined"
                required
                inputProps={{ maxLength: 280 }}
                />
            </Box>
            
            <Box m={2}
                display="flex"
                >
                <div
                style={{

                   " margin":"1.2em"
                }}
                display="flex"
                >
                    <div>
                        <Typography color="textPrimary" variant="h5" gutterBottom>
                            Public
                        </Typography>
                       
                    </div>
                    <div>
                        <Radio
                            inputRef={register}
                            checked={selectedValue === 'public'}
                            onChange={handleChange}
                            value="public"
                            name="board_type"
                            label="Public"
                            inputProps={{ 'aria-label': 'Public' }}
                            />
                    </div>
                    
                </div>
                <div>
                    <Typography color="textPrimary" variant="h5" gutterBottom>
                        Private
                    </Typography> 
                    <Radio
                    inputRef={register}
                    checked={selectedValue === 'private'}
                    onChange={handleChange}
                    value="private"
                    name="board_type"
                    label='Private'
                    inputProps={{ 'aria-label': 'Private' }}
                    />
                </div>

            </Box>
            </Box>
            <Box m={2}>

                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                >
                Create New Board
                </Button>
            </Box>
        </form>
        </Card>
    // </Container>
  );
};



export default connect((state) => state.userBoard, { createBoard })(BoardDetails);
