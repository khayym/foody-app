import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    bottomStatus: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        drawer: (state, dispatch) => {
            (!state.status) ? state.status = true : state.status = false;
        },
        bottomDrawer: (state, dispatch) => {
            (!state.bottomStatus) ? state.bottomStatus = true : state.bottomStatus = false;
        },
    }
});

export const { drawer, bottomDrawer } = drawerSlice.actions

export default drawerSlice.reducer