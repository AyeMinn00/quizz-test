import {CategoryModel} from "../../data/types";
import {addCategory, getCategories} from "./actions";
import {AxiosError} from "axios";
import {createReducer} from "@reduxjs/toolkit";

export type CategoryState = {
    data: CategoryModel[],
    loading: boolean,
    error?: AxiosError
}

const initialState: CategoryState = {
    data: [],
    loading: false,
    error: undefined
}

export const categoryReducer = createReducer(initialState, builder => {
    builder
        .addCase(getCategories.pending, state => {
            state.loading = true;
        })
        .addCase(getCategories.fulfilled, (state, {payload}) => {
            state.loading = false
            state.data = payload
        })
        .addCase(getCategories.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        .addCase(addCategory , (state , action) => {
            state.data.unshift(action.payload)
        })

})