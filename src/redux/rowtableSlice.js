import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const rowtableSlice = createSlice({
  name: "rowtable",
  initialState,
  reducers: {
    setRowTable: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRowTable } = rowtableSlice.actions;
export const rowTableSelector = (state) => state.rowtable;
const rowtableReducer = rowtableSlice.reducer;
export default rowtableReducer;
