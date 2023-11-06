import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  settings: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const { } = userSlice.actions;

export default userSlice.reducer;
