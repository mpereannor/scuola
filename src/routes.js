import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout'
import MainLayout from './components/layouts/MainLayout';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Onboard from './components/auth/Onboard';
import Board from './components/board/Board';
import Account from './components/user';
import Users from './components/user/Users';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
        { 
            path: 'account',
            element: <Account />,
            children: [
                {
                    path: ':id'
                }
            ]
        },
        { path: 'users', element: <Users /> },
        //   { path: 'reports', element: <ReportView /> },
        // { path: 'dashboard', element: <DashboardView /> },
        { path: 'board', element: <Board /> },
        //   { path: 'groups', element: <GroupView /> },
        //   { path: 'settings', element: <SettingsView /> },
        { path: '*', element: <Navigate to="/404" /> }
    ]
},
{
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'onboard', element: <Onboard /> },
    //   { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;