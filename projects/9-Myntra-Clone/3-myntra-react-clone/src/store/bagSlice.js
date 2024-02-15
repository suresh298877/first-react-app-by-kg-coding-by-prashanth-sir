import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const bagSlice=createSlice({
    name:"bag",
    initialState:["002","001"],
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload);
        },
        removeFromBag:(state,action)=>{
            return state.filter(itemId=>itemId!=action.payload);
        }
    }
});

export const bagActions=bagSlice.actions;
export default bagSlice;