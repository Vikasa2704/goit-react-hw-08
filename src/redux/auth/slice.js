import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
	user: {
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	}
const authSlice = createSlice ({
    name: 'auth',
    initialState,
        extraReducers: (builder) => {
		builder
			// .addCase(register.pending, (state, action) => {})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
			})
			// .addCase(register.rejected, (state, action) => {})

			// .addCase(login.pending, (state, action) => {})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
			})
			// .addCase(login.rejected, (state, action) => {})

			// .addCase(logOut.pending, (state, action) => {})
				.addCase(logout.fulfilled, () => {
					return initialState;
			})
			// .addCase(logOut.rejected, (state, action) => {})
	},
});



export const authReducer = authSlice.reducer;

