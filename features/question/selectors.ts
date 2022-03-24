import {RootState} from "../../store/store";
import {createSelector} from "reselect";

// select question with answer list
const selectQuestionWithAnswer = (state: RootState) => state.questionWithAnswer

export const questionWithAnswerSelector = createSelector(selectQuestionWithAnswer, state => state)