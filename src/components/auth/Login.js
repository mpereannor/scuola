import React from "react";
import { useForm } from "react-hook-form";
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
import Page from "../Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => props.login(data);

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
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
              <Box mb={3}>
                <Typography color="textPrimary" variant="h2">
                  Sign in
                </Typography>
              </Box>
              <Box mt={3} mb={1}>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  Login with email address
                </Typography>
              </Box>
              <TextField
                id="email"
                inputRef={register}
                name="email"
                label="Email Address"
                variant="outlined"
                required
              />

              <TextField
                id="password"
                inputRef={register}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Login
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body1">
                Don&apos;t have an account?{" "}
                <Link component={RouterLink} to="/register" variant="h6">
                  Sign up
                </Link>
              </Typography>
            </form>
          </div>
        </Container>
      </Box>
    </Page>
  );
};

export default connect((state) => state.onboard, { login })(Login);
