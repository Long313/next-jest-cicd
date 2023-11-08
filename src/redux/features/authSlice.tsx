import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type AuthState = {
  isLoading: boolean;
  email: string;
  isError: boolean;
};

const initialState = {
  isLoading: false,
  email: "",
  isError: false,
} as AuthState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        isLoading: true,
        email: action.payload,
        isError: true,
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
