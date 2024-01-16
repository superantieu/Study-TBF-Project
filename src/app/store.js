import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "../redux/searchSlice";
import projectReducer from "../redux/projectSlice";
import chooseReducer from "../redux/chooseSlice";
import rowtableReducer from "../redux/rowtableSlice";
import { ongoingApi } from "../services/ongoingApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    projects: projectReducer,
    choose: chooseReducer,
    rowtable: rowtableReducer,
    [ongoingApi.reducerPath]: ongoingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ongoingApi.middleware),
});
setupListeners(store.dispatch);
