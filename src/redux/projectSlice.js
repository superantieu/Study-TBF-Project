import { createSlice } from "@reduxjs/toolkit";
const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => {
      return action.payload;
    },
  },
});
export const { setProjects } = projectsSlice.actions;
export const selectProjects = (state) => state.projects;
const projectReducer = projectsSlice.reducer;
export default projectReducer;
