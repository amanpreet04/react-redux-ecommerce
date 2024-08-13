import { createSlice } from "@reduxjs/toolkit";

const initialState = { visible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
