import { Outlet, RouteObject } from "react-router-dom";

import AppLayout from "../ui/AppLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import HowItWorks from "../pages/HowItWorks";
import ErrorPage from "../pages/ErrorPage";
import DashboardPage from "../pages/DashboardPage";
import PriceAndServices from "../pages/PriceAndServices";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PriceAndServiceLayout from "../ui/PriceAndServiceLayout";
import ItemPriceList from "../pages/ItemPriceList";
import PriceListLayout from "../ui/PriceListLayout";
import PriceEstimatorProvider from "../context/PriceEstimatorContext";
import ServicesPage from "../pages/ServicesPage";
import BookingPage from "../pages/BookingPage";
import BookingLayOut from "../features/Booking/BookingLayOut";

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "how-it-works", element: <HowItWorks /> },
      {
        path: "prices-and-services",
        element: (
          <PriceEstimatorProvider>
            <Outlet />
          </PriceEstimatorProvider>
        ),

        children: [
          { index: true, element: <PriceAndServices /> },
          {
            path: "wash",
            element: <Outlet />,
            children: [
              { element: <PriceAndServices />, index: true },
              {
                element: <PriceAndServiceLayout />,
                children: [
                  {
                    path: "pricelist",
                    element: <PriceListLayout />,
                    children: [
                      {
                        path: ":slug",
                        element: <ItemPriceList />,
                      },
                    ],
                  },

                  { path: "service-details", element: <ServicesPage /> },
                ],
              },
            ],
          },
          {
            path: "wash-and-iron",
            element: <Outlet />,
            children: [
              { element: <PriceAndServices />, index: true },
              {
                element: <PriceAndServiceLayout />,
                children: [
                  {
                    path: "pricelist",
                    element: <PriceListLayout />,
                    children: [
                      {
                        path: ":slug",
                        element: <ItemPriceList />,
                      },
                    ],
                  },

                  {
                    path: "service-details",

                    element: <ServicesPage />,
                  },
                ],
              },
            ],
          },
          {
            path: "dry-cleaning",
            element: <Outlet />,
            children: [
              { element: <PriceAndServices />, index: true },
              {
                element: <PriceAndServiceLayout />,
                children: [
                  {
                    path: "pricelist",
                    element: <PriceListLayout />,
                    children: [
                      {
                        path: ":slug",
                        element: <ItemPriceList />,
                      },
                    ],
                  },

                  {
                    path: "service-details",
                    element: <ServicesPage />,
                  },
                ],
              },
            ],
          },
          {
            path: "duvets-bulky-items",
            element: <Outlet />,
            children: [
              { element: <PriceAndServices />, index: true },
              {
                element: <PriceAndServiceLayout />,
                children: [
                  {
                    path: "pricelist",
                    element: <PriceListLayout />,
                    children: [
                      {
                        path: ":slug",
                        element: <ItemPriceList />,
                      },
                    ],
                  },
                  {
                    path: "service-details",
                    element: <ServicesPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "booking",
        element: <BookingLayOut />,
        children: [{ element: <BookingPage />, index: true }],
      },
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
