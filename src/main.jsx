import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NotFoundPage from "./pages/NotfoundPage.jsx";
import LoadingPage from "./pages/Loadingpage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Projects from "./components/Projects/Projects.jsx";
import OngoingProjectDetail from "./components/OngoingProjects/OngoingProjectDetail.jsx";

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
          <Suspense>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/completedprojects",
        element: (
          <Suspense>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/ongoingproject",
        element: (
          <Suspense>
            <OngoingProjectDetail />
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
