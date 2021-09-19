import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import MainLayout from "./components/layouts/MainLayout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Account from "./components/user";
import Users from "./components/user/Users";
import Dashboard from "./components/board/DashboardView.js";
import BoardSingle from "./components/board/BoardSingle";
import NotFound from "./components/Notfound";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "account", element: <Account /> },
      { path: "dashboard/:userId", element: <Dashboard /> },
      { path: "board/:boardId", element: <BoardSingle /> },
      { path: "account", element: <Users /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Navigate to="/register" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
