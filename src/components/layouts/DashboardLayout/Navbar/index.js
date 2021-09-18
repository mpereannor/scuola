import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createUserProfile } from '../../../../state/users'
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
    Avatar,
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
  } from '@material-ui/core';

  import {
    AlertCircle as AlertCircleIcon,
    BarChart as BarChartIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    UserPlus as UserPlusIcon,
    Users as UsersIcon,
    Power as PowerIcon
  } from 'react-feather';
  import NavItem from './NavItem';
  
  const items = [
    {
      href: '/app/dashboard',
      icon: BarChartIcon,
      title: 'Dashboard'
    },
    {
        href: '/app/reports',
        icon: ShoppingBagIcon,
        title: 'Reports'
    },
    {
        href: '/app/groups',
        icon: UserIcon,
        title: 'Groups'
    },
    {
        href: '/app/settings',
        icon: SettingsIcon,
        title: 'Settings'
    },
    {
        href: '/login',
        icon: LockIcon,
        title: 'Login'
    },
    {
        href: '/register',
        icon: UserPlusIcon,
        title: 'Register'
    },
    {
      href: '/app/account',
      icon: UserIcon,
      title: 'User'
    },
    {
        href: '/404',
        icon: AlertCircleIcon,
        title: 'Error'
    },
    {
      href: '/logout',
      icon: PowerIcon,
      title: 'Logout'
    }
  ];

  const useStyles = makeStyles(() => ({
    mobileDrawer: {
      width: 256
    },
    desktopDrawer: {
      width: 256,
      top: 64,
      height: 'calc(100% - 64px)'
    },
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64
    }
  }));

  const NavBar = ({ 
      onMobileClose,
      openMobile,
      userProfile,
      // displayUserProfile
     }) => {
    const classes = useStyles();
    const location = useLocation();
  
    useEffect(() => {
      if (openMobile && onMobileClose) {
        onMobileClose();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);


    // useEffect(() => { 
    //     // displayUserProfile();
    // }, [])

    const content = (
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            p={2}
          >
            <Avatar
              className={classes.avatar}
              component={Link}
              src={userProfile.image}
              to="/app/account"
            />
            <Typography
              className={classes.name}
              color="textPrimary"
              variant="h5"
            >
              {userProfile.gender}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {userProfile.age}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {userProfile.bio}
            </Typography>
          </Box>
          <Divider />
          <Box p={2}>
            <List>
              {items.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </List>
          </Box>
          <Box flexGrow={1} />
        </Box>
      );

      return (
          <>
            <Hidden lgUp>
            <Drawer
                anchor="left"
                classes={{paper: classes.mobileDrawer }}
                onClose={onMobileClose}
                open={openMobile}
                variant="temporary"
            >
                {content}
            </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer}}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
          </>
      )

};

NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
  };
  
  NavBar.defaultProps = {
    onMobileClose: () => {},
    openMobile: false
  };
  
  export default connect((state) => state.profile, { createUserProfile })(NavBar);
  