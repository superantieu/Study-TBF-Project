import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NotFoundPage from "./pages/NotfoundPage.jsx";
import LoadingPage from "./pages/Loadingpage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Projects from "./components/Projects/Projects.jsx";
import OngoingProjectDetail from "./components/OngoingProjects/OngoingProjectDetail.jsx";
import UserDetail from "./components/Detail/Detail.jsx";
import CompletedDetail from "./components/Detail/CompletedDetail.jsx";
// import Detail from "./components/Detail/Detail.jsx";

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
      {
        path: "/users/:id",
        element: (
          <Suspense>
            <UserDetail />
          </Suspense>
        ),
      },
      {
        path: "/projectdetail/:id",
        element: (
          <Suspense>
            <CompletedDetail />
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
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
export default router;
