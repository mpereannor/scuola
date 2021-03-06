import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { connect } from "react-redux";
import { register } from "../../state/auth";
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
        borderWidth: "0.15em"
      },
      "&.Mui-focused fieldset": {
        border: "0.2em solid #011628"
      }
    },
  }
}));

const Register = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => props.register(data);


  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
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
              inputRef={register}
              name="username"
              label="Username"
              variant="outlined"
              required
              inputProps={{ maxLength: 20 }}
              fullWidth
              margin="normal"
            />
            <TextField
              id="fullname"
              inputRef={register}
              name="fullname"
              label="Fullname"
              variant="outlined"
              required
              inputProps={{ maxLength: 50 }}
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              inputRef={register}
              name="email"
              label="Email Address"
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />


            <TextField
              id="password"
              inputRef={register}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              margin="normal"
            />

            <Box>
              <label>Position</label>
              <Controller
                  name="Position"
                render={({ field }) => (
                  <Select {...field}
                  options={[
                    {value:'admin', label:'Admin'},
                    {value:'tutor', label:'Tutor'},
                    {value:'student', label:'Student'},
                    {value:'guest', label:'Guest'}
                  ]}
                  />
                )}
                control={control}
                defaultValue=""

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
                Sign up now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Do you already have an account?{" "}
              <Link component={RouterLink} to="/login" variant="h6">
                Sign in
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default connect((state) => state.onboard, { register })(Register);
