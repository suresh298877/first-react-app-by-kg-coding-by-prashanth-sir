import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name : "privacy",
    initialState : false,
    reducers : {
        toggle : ( state, action ) => {
           return !state;
        }
    }
});



export const privacyActions = privacySlice.actions;
export default privacySlice;