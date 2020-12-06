import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { updatePosition } from "../../state/auth";
import { Box, Container, Input, Typography, makeStyles } from "@material-ui/core";
import Page from "../Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Onboard = (props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => props.updatePosition(data);

  return (
    <Page className={classes.root} title="Onboard">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <Box mb={3}>
              <Typography color="textPrimary" variant="h2">
                What&apos;s your current Position in School?
              </Typography>
            </Box>
            <Box mb={3}>
              <select id="position" name="position" ref={register}>
                <option selected disabled hidden>
                  Choose Here
                </option>

                <option value="admin">Admin</option>

                <option value="tutor">Tutor</option>

                <option value="student">Student</option>

                <option value="guest">Guest</option>
              </select>
            </Box>

            <Input 
            type="submit"
            color="primary"
            size="large"
            fullWidth
            variant="contained"
            />
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default connect((state) => state.onboard, { updatePosition })(Onboard);
