import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basket/basketSlice'
import categorySlice from './slices/category/categorySlice'
import drawerSlice from './slices/drawer/drawerSlices'


export const store = configureStore({

    reducer: {
        drawer: drawerSlice,
        catSet: categorySlice,
        basket: basketSlice,
    },
})