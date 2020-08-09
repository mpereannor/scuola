import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../../state/actions/actionCreators";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
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
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => props.register(data);
  const emailRegex = '/^\S+@\S+\.\S+$/';

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="username"
          inputRef={register}
          name="username"
          label="username"
          variant="outlined"
          required
          inputProps={{ maxLength: 20 }}
        />
        <TextField
          id="fullname"
          inputRef={register}
          name="fullname"
          label="fullname"
          variant="outlined"
          required
          inputProps={{ maxLength: 50 }}

        />
        <TextField
          id="email"
          inputRef={register}
          name="email"
          label="email"
          variant="outlined"
          required
        //   inputProps={ { pattern: emailRegex }}
        />
        
        <TextField
          id="password"
          inputRef={register}
          name="password"
          label="password"
          type="password"
          variant="outlined"
          required
        />

        <TextField
          id="passwordConfirmation"
          inputRef={register}
          name="passwordConfirmation"
          label="password confirmation"
          type="password"
          variant="outlined"
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </form>

      <div>
        <p>Already Have an Account?</p>
        <Link to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default connect((state) => state.onboard, { register })(Register);
