import React from "react";
import { connect } from "react-redux";
import { createBoard } from "../../state/boards";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  Box,
  Card,
} from "@material-ui/core";
import { withFormik } from "formik";

const options = ["public", "private"];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    padding: theme.spacing(3),
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
  avatar: {
    height: 100,
    width: 100,
  },
}));

const BoardForm = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <Container className={clsx(classes.root, className)}>
      <Card variant="outlined">
        <form
          className={classes.root}
          onSubmit={
            typeof props.onSubmit === "function"
              ? props.onSubmit
              : props.handleSubmit
          }
          noValidate
        >
          <Box>
            <Box m={2}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                required
                type="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={props.errors.email}
                inputProps={{ maxLength: 20 }}
              />
            </Box>
            <Box m={2}>
              <TextField
                id="description"
                label="description"
                name="description"
                variant="outlined"
                required
                type="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={props.errors.email}
                inputProps={{ maxLength: 280 }}
              />
            </Box>

            <Box m={2} display="flex">
              <RadioGroup name={"board_type"}>
                {options.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    onChange={props.handleChange}
                    label={option.toUpperCase()}
                  />
                ))}
              </RadioGroup>
            </Box>
          </Box>
          <Box m={2}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create New Board
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export const BoardDetails = withFormik({
  mapPropsToValues: () => ({
    name: "",
    description: "",
    option: "public",
  }),
  handleSubmit: (values, { props }) => {
    props.createBoard(values);
  },
  displayName: "boardForm",
})(BoardForm);

export default connect((state) => state.userBoard, { createBoard })(
  BoardDetails
);
