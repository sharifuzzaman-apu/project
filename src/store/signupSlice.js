import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  agree: false,
  errors: {},
  authenticated: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setField(state, { payload: { field, value } }) {
      state[field] = value;
    },
    setAgree(state, { payload }) {
      state.agree = payload;
    },
    setErrors(state, { payload }) {
      state.errors = payload;
    },
    setAuthenticated(state, { payload }) {
      state.authenticated = payload;
    },
    clearForm(state) {
      Object.assign(state, initialState);
    },
  },
});
export const { setField, setAgree, setErrors, clearForm, setAuthenticated } =
  signupSlice.actions;
export default signupSlice.reducer;
