import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorGral: false,
  errorMsgGral: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorGral: (state, action) => {
      state.errorGral = action.payload;
    },
    setErrorMsgGral: (state, action) => {
      state.errorMsgGral = action.payload;
    },
    crearAllErrors: (state) => {
      for (const key in initialState) {
        if (initialState.hasOwnProperty(key)) {
          const element = initialState[key];
          state[key] = element;
        }
      }
    },
  },
});

export const {    
    setErrorGral,
    setErrorMsgGral,
    crearAllErrors
  } = errorSlice.actions;

export default errorSlice.reducer;
