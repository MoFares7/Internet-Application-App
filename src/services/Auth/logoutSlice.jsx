// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
        name: 'logout',
        initialState: {
                isAuthenticated: false,
                user: null,
        },
        reducers: {
                loginSuccess: (state, action) => {
                        state.isAuthenticated = true;
                        state.user = action.payload;
                },
                logout: (state) => {
                        state.isAuthenticated = false;
                        state.user = null;
                        localStorage.clear('token');
                        
                },
        },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
