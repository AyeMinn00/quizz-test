import {RootState} from "../../store/store";
import {createSelector} from "reselect";

// select category list
const selectCategories = (state: RootState) => state.category

export const categorySelector = createSelector(selectCategories, state => state)

// select create category states
const selectCreateCategoryState = (state: RootState) => state.createCategory
export const createCategorySelector = createSelector(selectCreateCategoryState, state => state)

