import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  website: "",
  username: "",
  email: "",
  password: "",
  passkey:"",
};

const passwordSlice = createSlice({
  name: "passwords",
  initialState,

  reducers: {
    addPass(state, action) {
      state.push(action.payload);
    },
    apiAddPass(state) {
      console.log(state)
    }
  },
});

export const { addPass } = passwordSlice.actions

export default passwordSlice.reducer;