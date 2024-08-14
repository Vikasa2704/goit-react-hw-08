import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../config/goitApi";


export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signup', registerData);
      setToken(response.data.token);
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
  }
);

export const login = createAsyncThunk(
 "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/login', loginData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
      try {
        const response = await goitApi.post('/users/logout');
        clearToken();
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
        setToken(persistedToken);
        const res = await goitApi.get('/users/me');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  