import { createSlice } from "@reduxjs/toolkit";
import goodsArr from '../data/goods.json'

export const goodsSlice = createSlice({
    name: 'goodsFruit',
    initialState:{
        goodsInitial: goodsArr
    },
    reducers:{

    }
})

export const {} = goodsSlice.actions;
export const selectGoods = state => state.goodsFr.goodsInitial;
export default goodsSlice.reducer;