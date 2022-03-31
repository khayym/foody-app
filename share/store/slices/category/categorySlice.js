import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryName: 'Fast Food',
}

export const categorySlice = createSlice({
    name: 'categorySetter',
    initialState,
    reducers: {
        categorySetter: (state, dispatch) => {
            state.categoryName = dispatch.payload
        },
    }
});

export const { categorySetter } = categorySlice.actions

export default categorySlice.reducer