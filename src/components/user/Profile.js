import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { 
    getUser,
    displayUserProfile
} from '../../state/users';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = props => {
    const {
        className,
        getUser,
        user,
        userProfile,
    } = props;

    console.log('bread', props)
    
    const classes = useStyles();
    
    const { username, fullname, email } = user;
    const {  bio, location, age, image } = userProfile;

    console.log('bio', bio)
    
    const { userId }  = useParams();
    useEffect(() => { 
        displayUserProfile(userId);
        getUser(userId);
  }, [])

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={image}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {username}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {age}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {email}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {age}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {location}
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {bio}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => { 
    return { 
        user: state.allUsers.user,
        userProfile: state.profile.userProfile
    }
}

export default connect(mapStateToProps,
     { 
    getUser,
    displayUserProfile
})(Profile);

