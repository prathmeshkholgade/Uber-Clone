import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logOutUserAction } from "./userSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;
const initialState = {
  captain: null,
};
export const authenticateCaptain = createAsyncThunk(
  "captain/authenticate",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/captains/profile`, {
        withCredentials: true,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginCaptainAction = createAsyncThunk(
  "captain/login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/captains/login`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const captainLogoutAction = createAsyncThunk(
  "captain/logout",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/captains/logout`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const regisetCaptain = createAsyncThunk(
  "captain/register",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/captains/register`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const captainSlice = createSlice({
  name: "captain",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(regisetCaptain.fulfilled, (state, action) => {
        state.captain = action.payload;
      })
      .addCase(loginCaptainAction.fulfilled, (state, action) => {
        state.captain = action.payload;
      })
      .addCase(logOutUserAction.fulfilled, (state, action) => {
        state.captain = action.payload;
      })
      .addCase(authenticateCaptain.fulfilled, (state, action) => {});
  },
});

export default captainSlice.reducer;
