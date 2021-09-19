import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../state/auth";
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

const SimpleSignUpForm = (props) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
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
              mb={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography color="textPrimary" variant="h2">
                Create your new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              required
              type="name"
              autoComplete="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.errors.username}
              inputProps={{ maxLength: 20 }}
              fullWidth
              margin="normal"
              defaultValue={props.username}
            />
            <TextField
              id="fullname"
              name="fullname"
              label="Fullname"
              variant="outlined"
              required
              type="name"
              autoComplete="fullname"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              // error={props.errors.fullname}
              helperText={props.errors.fullname}
              inputProps={{ maxLength: 50 }}
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              name="email"
              label="email"
              variant="outlined"
              required
              type="name"
              autoComplete="fullname"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.errors.email}
              fullWidth
              margin="normal"
            />
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

            <Box my={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Sign up now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Do you already have an account?{" "}
              <Link component={RouterLink} to="/login" variant="h6">
                Sign in{" "}
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export const Register = withFormik({
  mapPropsToValues: () => ({
    username: "",
    fullname: "",
    email: "",
    password: "",
    isFetching: false,
    isLoggedIn: false,
  }),
  validationSchema: yup.object().shape({
    email: yup.string().email().required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
  }),
  handleSubmit: (values, { props }) => {
    props.registerUser(values);
  },
  displayName: "signupForm",
})(SimpleSignUpForm);

export default connect((state) => state.onboard, { registerUser })(Register);
