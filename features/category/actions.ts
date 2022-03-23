import appService from "../../data/services/service";
import {CategoryModel} from "../../data/types";
import {AxiosError} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk<CategoryModel[], void, {
    rejectValue: AxiosError
}>('category/getCategories',
    async (arg, thunkApi) => {
        return await appService.getCategories()
            .then(res => res)
            .catch(err =>
                thunkApi.rejectWithValue(err)
            )
    })