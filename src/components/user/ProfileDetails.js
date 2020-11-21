import React, { useState } from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { createUserProfile } from "../../state/actions/actionCreators";
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, userProfile, users, ...rest }) => {
  const classes = useStyles();
//   const [values, setValues] = useState({
//     firstName: 'Katarina',
//     lastName: 'Smith',
//     email: 'demo@devias.io',
//     phone: '',
//     state: 'Alabama',
//     country: 'USA'
//   });

const [profile, setProfile] = useState({
    age: 0,
    gender: '',
    location: '',
    bio : '',
});

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
      event.preventDefault();
      createUserProfile(profile)
  }

  return (
    <form
    onSubmit={onSubmit}
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify your age"
                label="Age"
                name="age"
                onChange={handleChange}
                required
                value={profile.age}
                variant="outlined"
                type="number"
              />
              {/* <TextField
                fullWidth
                helperText="Please specify your fullname"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              /> */}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={handleChange}
                required
                value={profile.gender}
                variant="outlined"
              />
              {/* <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              /> */}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Location"
                name="location"
                onChange={handleChange}
                required
                value={profile.location}
                variant="outlined"
              />
              {/* <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              /> */}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label=" Bio"
                name="bio"
                onChange={handleChange}
                value={profile.bio}
                variant="outlined"
              />
              {/* <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              /> */}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              /> */}
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default connect((state) => state.profile, {createUserProfile})(ProfileDetails);
// export default ProfileDetails;
