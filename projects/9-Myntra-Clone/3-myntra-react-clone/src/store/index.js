import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatuSlice from "./fetchingStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatuSlice.reducer,
        bag:bagSlice.reducer,
    }
})

export default myntraStore;