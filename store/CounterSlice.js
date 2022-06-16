import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  count: 0,
  user: "sasd",
  hello: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
