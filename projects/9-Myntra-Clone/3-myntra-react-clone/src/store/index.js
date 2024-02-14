import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatuSlice from "./fetchingStatusSlice";


const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatuSlice.reducer,
    }
})

export default myntraStore;