import { RouteObject } from "react-router-dom";

import AppLayout from "../ui/AppLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import HowItWorks from "../pages/HowItWorks";
import ErrorPage from "../pages/ErrorPage";
import DashboardPage from "../pages/DashboardPage";
import PriceAndServices from "../pages/PriceAndServices";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "prices-and-services", element: <PriceAndServices /> },
      { path: "login", element: <LoginPage /> },
      { path: "login", element: <RegistrationPage /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
    children: [{ path: "main", element: <HomePage /> }],
  },
  { path: "*", element: <ErrorPage /> },
];
