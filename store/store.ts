import {configureStore} from "@reduxjs/toolkit";
import {categoryReducer} from "../features/category";
import categoryDialogReducer from "../features/category_dialog/categoryDialogSlice";
import {categoryCreateReducer} from "../features/category/createReducer";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        createCategory: categoryCreateReducer,
        categoryDialog: categoryDialogReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch