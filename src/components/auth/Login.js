import React from "react";
import { useForm, Controller } from "react-hook-form";
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

const Login = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
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
                  <Controller
                    name={"username"}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        id="username"
                        inputRef={register}
                        name="username"
                        label="Username"
                        variant="outlined"
                        required
                        inputProps={{ maxLength: 20 }}
                        fullWidth
                        margin="normal"
                        defaultValue={props.username}
                      />
                    )}
                  />
                </Box>
                <Box mt={2}>
                  <Controller
                    name={"email"}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        id="email"
                        inputRef={register}
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        defaultValue={props.email}
                      />
                    )}
                  />
                </Box>
                <Box mt={2}>
                  <Controller
                    name={"password"}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        id="password"
                        name="password"
                        inputRef={register}
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        defaultValue={props.password}
                      />
                    )}
                  />
                </Box>
              </Box>
              {errors.message}

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
