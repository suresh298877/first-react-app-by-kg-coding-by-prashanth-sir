import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialItems:(state,action)=>{
            // console.log(action.payload)
            state=action.payload;
            return state;
        }
    }
});

export const itemsActions=itemsSlice.actions;
export default itemsSlice;