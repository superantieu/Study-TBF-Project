/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import { store } from "./app/store";
import theme from "./theme";

import App from "./App.tsx";
import Loading from "./pages/LoadingPage.tsx";

import ErrorPage from "./pages/Error.page.tsx";
import NotFoundPage from "./pages/NotFound.page.tsx";
import WatchPage from "./pages/Watch.page.tsx";
import MainLayout from "./layouts/Main.layout.tsx";
import ProgressBar from "./components/Common/ProgressBar/ProgressBar.tsx";

const HomePage = lazy(() => import("./pages/Home.page.tsx"));
const NewsPage = lazy(() => import("./pages/News.page.tsx"));
const ProfilePage = lazy(() => import("./pages/FighterProfile.page.tsx"));
const SchedulePage = lazy(() => import("./pages/Schedule.page.tsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <HomePage />
                        </Suspense>
                    </MainLayout>
                ),
            },
            {
                path: "profiles",
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <ProfilePage />
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        path: ":id",
                        element: <></>, //fighter profile component
                    },
                ],
            },
            {
                path: "news",
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <NewsPage />
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        path: ":id",
                        element: <></>, //news component
                    },
                ],
            },
            {
                path: "schedules",
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <SchedulePage />
                        </Suspense>
                    </MainLayout>
                ),
            },
            {
                path: "watch",
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <WatchPage />
                        </Suspense>
                    </MainLayout>
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

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} fallbackElement={<Loading />} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
