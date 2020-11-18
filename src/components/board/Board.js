import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createBoard } from "../../state/actions/actionCreators";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Radio } from "@material-ui/core";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
      "&:invalid": { 
        //   border: "#f17808 solid 2px"
      }
  }
}));

const Register = (props) => {
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
        <Radio
        inputRef={register}
        checked={selectedValue === 'public'}
        onChange={handleChange}
        value="public"
        name="board_type"
        label="Public"
        labelPlacement='end'
        // inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
        inputRef={register}
        checked={selectedValue === 'private'}
        onChange={handleChange}
        value="private"
        name="board_type"
        label='Private'
        labelPlacement='end'
        // inputProps={{ 'aria-label': 'B' }}
        />
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

export default connect((state) => state.onboard, { createBoard })(Register);
