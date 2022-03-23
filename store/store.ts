import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import {categoryReducer} from "../features/category";

export const store = configureStore({
    reducer : {
        counter: counterReducer,
        category : categoryReducer,
    },
    middleware: (getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch