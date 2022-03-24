import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

export type QuestionDialogState = {
    open: boolean
}

const initialState: QuestionDialogState = {
    open: false
}

export const questionDialogSlice = createSlice({
    name: 'questionDialog',
    initialState,
    reducers: {
        openQuestionDialog: state => {
            state.open = true
        },
        closeQuestionDialog: state => {
            state.open = false
        }
    }
})

export const {
    openQuestionDialog, closeQuestionDialog
} = questionDialogSlice.actions

export const selectQuestionDialogOpen = (state: RootState) => state.questionDialog.open

export default questionDialogSlice.reducer