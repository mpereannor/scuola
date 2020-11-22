import React, { useState } from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { createUserProfile } from "../../state/users";
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


const useStyles = makeStyles(() => ({
  root: {}
}));


const ProfileDetails = props => { 
    const { 
        className, 
        userProfile,
        createUserProfile,
        users
    } = props;

    const classes = useStyles();

const [profileData, setProfileData] = useState({
    age: 0,
    gender: '',
    location: '',
    bio : '',
});

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value
    });
  };

  console.log('dreams:', createUserProfile)
  const handleSubmit = event => {
      event.preventDefault();
      createUserProfile(profileData)
  }

  return (
    <form
    onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
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
                value={profileData.age}
                variant="outlined"
                type="number"
              />
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
                value={profileData.gender}
                variant="outlined"
              />
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
                value={profileData.location}
                variant="outlined"
              />
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
                value={profileData.bio}
                variant="outlined"
              />
             
            </Grid>
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
