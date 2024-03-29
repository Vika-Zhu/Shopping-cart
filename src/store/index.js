import { configureStore, createReducer } from "@reduxjs/toolkit"
import goodsFruitReduser from './goodsSlice'
import cartReduser from './cartSlice'



export default configureStore({
    reducer:{
        goodsFr: goodsFruitReduser,
        cart: cartReduser
    }
})