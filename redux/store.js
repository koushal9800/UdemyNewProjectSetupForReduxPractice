import { combineReducers, configureStore } from "@reduxjs/toolkit";

import User from "./reducer/User";
import {logger} from 'redux-logger'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { version } from "react";
import Categories from "./reducer/Categories";
import Donations from "./reducer/Donation";

const rootReducer = combineReducers({
    user:User,
    categories: Categories,
    donations: Donations
})
const configuration = {
    key:'root',
    storage: AsyncStorage,
    version:1
}
const persistedReducer = persistReducer(configuration, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
});

export default store;
export const persiststor= persistStore(store)
persiststor.purge()
