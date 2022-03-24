/*
    this question state is for admin that why answer is included
 */
import {AdminQuestionModel} from "../../data/types";
import {AxiosError} from "axios";
import {createReducer} from "@reduxjs/toolkit";
import {addQuestion, getQuestionsWithAnswer} from "./actions";

export type QuestionWithAnswerState = {
    data: AdminQuestionModel[],
    loading: boolean,
    error?: AxiosError
}

const initialState: QuestionWithAnswerState = {
    data: [],
    loading: false,
    error: undefined
}

export const questionWithAnswerReducer = createReducer(initialState, builder => {
    builder
        .addCase(getQuestionsWithAnswer.pending, state => {
            state.loading = true
        })
        .addCase(getQuestionsWithAnswer.fulfilled, (state, {payload}) => {
            state.loading = false
            state.data = payload
        })
        .addCase(getQuestionsWithAnswer.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        .addCase(addQuestion, (state, action) => {
            state.data.unshift(action.payload)
        })
})