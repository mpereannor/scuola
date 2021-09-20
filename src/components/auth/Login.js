import React from "react";
import { connect } from "react-redux";
import { login } from "../../state/auth";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { withFormik } from "formik";
import * as yup from "yup";
import Page from "../Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "2px",
        borderWidth: "0.15em",
      },
      "&.Mui-focused fieldset": {
        border: "0.2em solid #011628",
      },
    },
  },
}));

const SimpleLoginForm = (props) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <div>
            <form
              className={classes.root}
              onSubmit={
                typeof props.onSubmit === "function"
                  ? props.onSubmit
                  : props.handleSubmit
              }
              noValidate
            >
              <Box
                mb={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography color="textPrimary" variant="h2">
                  Sign in
                </Typography>
              </Box>
              <Box mt={4} mb={2}>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  Login with email address
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    required
                    type="name"
                    autoComplete="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={props.errors.email}
                    fullWidth
                    margin="normal"
                  />
                </Box>
                <Box mt={2}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    autoComplete="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={props.errors.password}
                  />
                </Box>

                <Box my={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Sign In
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{" "}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </form>
          </div>
        </Container>
      </Box>
    </Page>
  );
};

export const Login = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    isFetching: false,
    isLoggedIn: false,
  }),
  validationSchema: yup.object().shape({
    email: yup.string().required("Please enter a valid email address"),
    password: yup.string().required("Please enter your password"),
  }),
  handleSubmit: (values, { props }) => {
    props.login(values);
  },
  displayName: "loginForm",
})(SimpleLoginForm);

export default connect((state) => state.onboard, { login })(Login);
