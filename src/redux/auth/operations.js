import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
 "auth/login",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
    "auth/logout",
     async (contactId, thunkAPI) => {
       try {
         const response = await axios.delete(`/contacts/${contactId}`);
         return response.data;
       } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
       }
     }
   );
   
   export const refreshUser = createAsyncThunk(
    "auth/refresh",
     async (contactId, thunkAPI) => {
       try {
         const response = await axios.delete(`/contacts/${contactId}`);
         return response.data;
       } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
       }
     }
   );
   

// Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.
// login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.
// logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.
// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.