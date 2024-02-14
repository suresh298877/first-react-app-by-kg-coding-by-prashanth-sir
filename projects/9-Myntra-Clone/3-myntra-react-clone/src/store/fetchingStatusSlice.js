import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const fetchStatuSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false, //false: Pending and true:done
        currentlyFetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
            state.fetchDone=true;
            return state;
        },
        markFetchingStarted:(state)=>{
            state.currentlyFetching=true;
            return state;
        },
        markFetchingFinished:(state)=>{
            state.currentlyFetching=false;
            return state;
        }
    }
});

export const fetchStatuSliceActions=fetchStatuSlice.actions;
export default fetchStatuSlice;