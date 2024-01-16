import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const chooseSlice = createSlice({
  name: "choose",
  initialState,
  reducers: {
    setChoose: (state, action) => {
      console.log(action.payload);
      state.value = [...action.payload];
    },
  },
});

export const { setChoose } = chooseSlice.actions;
export const chooseSelector = (state) => state.choose;
const chooseReducer = chooseSlice.reducer;
export default chooseReducer;
