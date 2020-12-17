import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createBoard } from '../../state/board';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Radio, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: "100%",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
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
    <div>
        
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          inputRef={register}
          name="name"
          label="name"
          variant="outlined"
          required
          inputProps={{ maxLength: 20 }}
        />
        <TextField
          id="description"
          inputRef={register}
          name="description"
          label="description"
          variant="outlined"
          required
          inputProps={{ maxLength: 280 }}
          
          />
        <div>
            <Typography variant="button" gutterBottom>
                Public
            </Typography>
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
        <div>
            <Typography variant="button" gutterBottom>
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Create New Board
        </Button>
      </form>

      <div>
        <Link to="/editboard">
          Edit Board
        </Link>
      </div>
    </div>
  );
};



export default connect((state) => state.onboard, { createBoard })(BoardDetails);