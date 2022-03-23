import {AxiosError} from "axios";
import {createReducer} from "@reduxjs/toolkit";
import {createCategory} from "./actions";

export type CreateCategoryState = {
    loading: boolean,
    error?: AxiosError
}

const initialState: CreateCategoryState = {
    loading: false,
    error: undefined
}

export const categoryCreateReducer = createReducer(initialState, builder => {
    builder
        .addCase(createCategory.pending, state => {
            state.loading = true
        })
        .addCase(createCategory.fulfilled, (state, {payload}) => {
            state.loading = false
        })
        .addCase(createCategory.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
})