import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const initialState = {
  user: null,
};

export const authenticateUser = createAsyncThunk(
  "captain/authenticate",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/users/profile`, {
        withCredentials: true,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const signUpUser = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/users/register`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/users/login`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const logOutUserAction = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/users/logout`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logOutUserAction.fulfilled, (state, action) => {
        state.user = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});

export default userSlice.reducer;
