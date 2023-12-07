import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import NotFoundPage from "./pages/NotfoundPage.jsx";
import LoadingPage from "./pages/Loadingpage.jsx";
import App from "./App.jsx";
import ProgressBar from "./components/Commons/ProgressBar/ProgressBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tables from "./components/Sidebar/Tables.jsx";
import Billing from "./components/Sidebar/Billing.jsx";
import Profile from "./components/Sidebar/AccountPages/Profile.jsx";
import SignIn from "./components/Sidebar/AccountPages/SignIn.jsx";
import SignUp from "./components/Sidebar/AccountPages/SignUp.jsx";

// const HomePage = lazy(() => import("./pages/Home.page.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/tables",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Tables />
          </Suspense>
        ),
      },
      {
        path: "/billing",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Billing />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<LoadingPage />} />
    </ChakraProvider>
  </React.StrictMode>
);
export default router;
