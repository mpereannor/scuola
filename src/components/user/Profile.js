import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, getUsers, displayUserProfile } from '../../state/users';
 
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
        getUsers,
        getUser,
        displayUserProfile,
        users,
        user,
    } = props;
    
    const classes = useStyles();
    
    const { username, fullname } = user;

    useEffect(() => { 
      getUser();
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
            src={user.avatar}
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
            {fullname}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

// export default Profile;
export default connect((state) => state.allUsers, { getUser })(Profile);
