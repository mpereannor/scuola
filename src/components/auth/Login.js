import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../state/auth";
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
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => props.login(data);
  const emailRegex = "/^S+@S+.S+$/";

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
      <div>
        <p>
          Don't Have an Account?
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default connect((state) => state.onboard, { login })(Login);
