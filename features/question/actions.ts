import {createAction, createAsyncThunk, Dispatch} from "@reduxjs/toolkit";
import {AdminQuestionModel} from "../../data/types";
import {AxiosError} from "axios";
import appService from "../../data/services/service";
import {CreateQuestionRequest} from "../../data/types/request";

export const getQuestionsWithAnswer =
    createAsyncThunk<AdminQuestionModel[],
        void,
        { rejectValue: AxiosError }>('question/getQuestions',
        async (arg, thunkApi) => {
            return await appService.getQuestionWithAnswer()
                .then(res => res)
                .catch(err => thunkApi.rejectWithValue(err))
        }
    )

export const createQuestion =
    createAsyncThunk<AdminQuestionModel,
        CreateQuestionRequest,
        { rejectValue: AxiosError }>('question/createQuestion',
        async (arg, thunkApi) => {
            return await appService.createQuestion(arg)
                .then(res => {
                    dispatchAddQuestion(thunkApi.dispatch, res)
                    return res
                })
                .catch(err => thunkApi.rejectWithValue(err))
        }
    )

// invoke when creating question success to update question list by adding new created question
const dispatchAddQuestion = (dispatch: Dispatch, newQuestion: AdminQuestionModel) => {
    dispatch(addQuestion(newQuestion))
}

export const addQuestion = createAction<AdminQuestionModel>('question/add')