// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    counter : 5,
    privacy : false,
}

// const counterReducer = ( store = INITIAL_VALUE, action ) => {

//     if( action.type === "INCREMENT" ){
//         return { ...store, counter : store.counter + 1 }
//     }
//     else if( action.type === "DECREMENT" ){
//         return {...store, counter : store.counter -1 }
//     }
//     else if ( action.type === "Add" ){
//         return {...store, counter : store.counter + Number(action.payload.num) }
//     }
//     else if( action.type === "Subtract" ){
//         return {...store, counter : store.counter - Number(action.payload.num) }
//     }
//     else if( action.type === "toggle" ){
//         return { ...store, privacy : !store.privacy }
//     }
//     return store;
// };



const counterStore=configureStore( { reducer : {
    
} } );


export default counterStore;

