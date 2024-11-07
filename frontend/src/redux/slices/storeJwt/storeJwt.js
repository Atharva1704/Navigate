import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    user: null,
    token: null,
    travel: null
};

export const jwtSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTravel: (state, action) => {
            state.travel = action.payload;
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout, setTravel } = jwtSlice.actions;

export default jwtSlice.reducer;
