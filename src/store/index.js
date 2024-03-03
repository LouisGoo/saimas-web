import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import uiDataReducer from "./modules/uiData";

export default configureStore({
    reducer:{
        user:userReducer,
        uiData:uiDataReducer
    }
})

