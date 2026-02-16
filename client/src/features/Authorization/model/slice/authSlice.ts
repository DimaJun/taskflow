import { User } from '@/entities/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	userData: User | null;
	isAuthorized: boolean;
}

const initialState: AuthState = {
	userData: null,
	isAuthorized: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthorized: (state, action: PayloadAction<boolean>) => {
			state.isAuthorized = action.payload;
		},
		setUserData: (state, action: PayloadAction<User | null>) => {
			state.userData = action.payload;
		},
		logout: (state) => {
			state.userData = null;
			state.isAuthorized = false;
		},
	},
});

export const authReducer = authSlice.reducer;
export const useAuthActions = authSlice.actions;
