import { createSlice } from "@reduxjs/toolkit";

const uiDataStore=createSlice({
    name:"uiData",
    initialState:{
        openLogin:false
    },
    reducers:{
        setOpenLogin(state,action){
            state.openLogin=true;
        },
        setCloseLogin(state,action){
            state.openLogin=false;
        }
    }
})

const {setCloseLogin,setOpenLogin} = uiDataStore.actions;

export {setCloseLogin,setOpenLogin};

const uiDataReducer=uiDataStore.reducer;

export default uiDataReducer;
