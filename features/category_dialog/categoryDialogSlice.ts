import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";


export type CategoryDialogState = {
    open: boolean
}

const initialState: CategoryDialogState = {
    open: false
}

export const categoryDialogSlice = createSlice({
    name: 'categoryDialog',
    initialState,
    reducers: {
        openCategoryDialog: state => {
            state.open = true
        },
        closeCategoryDialog: state => {
            state.open = false
        }
    }
})

export const {
    openCategoryDialog, closeCategoryDialog
} = categoryDialogSlice.actions

export const selectCategoryDialogOpen = (state: RootState) => state.categoryDialog.open

export default categoryDialogSlice.reducer