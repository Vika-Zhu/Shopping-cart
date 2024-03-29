import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        value: {},
        totalAmount: 0
    },
    reducers:{
        increment : (state, data)=>{  //data = articul
            let articul = data.payload;
            if(state.value[articul] === undefined) state.value[articul] = 0
            state.value[articul]++; 
        },
        sum: (state, data) =>{
            let cost = data.payload;
            state.totalAmount += cost; 
        }, 
        minus: (state, data) =>{
            const { articul, quantity, cost } = data.payload;
            if(state.value[articul] === undefined) state.value[articul] = 0
            state.value[articul]--;
            if (state.value[articul] === 0) {
                delete state.value[articul];
            }
            state.totalAmount -= cost; 
        },
        remove: (state, data) =>{
            const { articul, quantity, cost } = data.payload;
            state.value[articul] = 0
            if (state.value[articul] === 0) {
                delete state.value[articul];
            }
            state.totalAmount -= quantity * cost;
        }
    }
})

export const {increment, sum, remove, minus,} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectTotalAmount = state => state.cart.totalAmount;

export default cartSlice.reducer;