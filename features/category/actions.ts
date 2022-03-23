import appService from "../../data/services/service";
import {CategoryModel} from "../../data/types";
import {AxiosError} from "axios";
import {createAction, createAsyncThunk, Dispatch} from "@reduxjs/toolkit";
import {CreateCategoryRequest} from "../../data/types/request";

export const getCategories = createAsyncThunk<CategoryModel[], void, {
    rejectValue: AxiosError
}>('category/getCategories',
    async (arg, thunkApi) => {
        return await appService.getCategories()
            .then(res => res)
            .catch(err =>
                thunkApi.rejectWithValue(err))
    })

/*
    create a category and add new created category to category list when task success
 */
export const createCategory =
    createAsyncThunk<CategoryModel,
        CreateCategoryRequest,
        { rejectValue: AxiosError }>('category/createCategory',
        async (arg, thunkApi) => {
            return await appService.createCategory(arg)
                .then(res => {
                    dispatchAddCategory(thunkApi.dispatch, res)
                    return res
                })
                .catch(err => thunkApi.rejectWithValue(err))
        })

// invoke when creating category success to update category list by adding new created category
const dispatchAddCategory = (dispatch: Dispatch, newCategory: CategoryModel) => {
    dispatch(addCategory(newCategory))
}

export const addCategory = createAction<CategoryModel>('category/add')