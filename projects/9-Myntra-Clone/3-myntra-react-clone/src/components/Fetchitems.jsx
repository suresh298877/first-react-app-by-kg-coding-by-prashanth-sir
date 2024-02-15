import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatuSliceActions } from "../store/fetchingStatusSlice";

const Fetchitems=()=>{
    const fetchStatus=useSelector(store=>store.fetchStatus);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller=new AbortController();
        const signal=controller.signal;

        dispatch(fetchStatuSliceActions.markFetchingStarted());
        fetch("http://localhost:3030/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
            dispatch(fetchStatuSliceActions.markFetchDone());
            dispatch(fetchStatuSliceActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items))
        });

        return ()=>{
            controller.abort();
        };
    },[fetchStatus])

    return <>

    </>
}

export default Fetchitems;