import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/category/categorySlice'
import drawerSlice from './slices/drawer/drawerSlices'


export const store = configureStore({

    reducer: {
        drawer: drawerSlice,
        catSet: categorySlice,
    },
})