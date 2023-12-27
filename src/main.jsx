import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
import TeamProject from "./components/Detail/TeamProject.jsx";
import ProjectGanttChart from "./components/GanttChartForOngoing/ProjectGanttChart.jsx";

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
        path: "/ganttchart",
        element: (
          <Suspense>
            <ProjectGanttChart />
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
        path: "/discipline/:name",
        element: (
          <Suspense>
            <TeamProject />
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
const customTheme = extendTheme({
  styles: {
    global: {
      ".selectbox > option, .selectbox > optgroup": {
        background: "#272a2f !important",
      },
      ".apexcharts-tooltip-y-group": {
        display: "flex",
        gap: "20px",
        " align-items": "center",
        "justify-content": "center",
      },
      ".apexcharts-hidden-element-shown": {
        transform: "translateY(-3px)",
      },
      // "._35nLX": {
      //   fill: "#29292d",
      // },
      "._2dZTy:nth-of-type(2n)": {
        fill: "#fff",
      },
      "._2dZTy:nth-of-type(2n+1)": {
        fill: "#edf2f7",
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
export default router;
