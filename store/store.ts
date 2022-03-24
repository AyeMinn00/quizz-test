import {configureStore} from "@reduxjs/toolkit";
import {categoryReducer} from "../features/category";
import categoryDialogReducer from "../features/category_dialog/categoryDialogSlice";
import questionDialogReducer from "../features/question_dialog/questionDialogSlice";
import {categoryCreateReducer} from "../features/category/createReducer";
import {questionWithAnswerReducer} from "../features/question";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        createCategory: categoryCreateReducer,
        categoryDialog: categoryDialogReducer,

        questionWithAnswer: questionWithAnswerReducer,
        questionDialog: questionDialogReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch