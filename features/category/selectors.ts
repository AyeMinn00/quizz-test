import {RootState} from "../../store/store";
import {createSelector} from "reselect";

export const selectCategories = (state: RootState) => state.category

export const categorySelector = createSelector(selectCategories, state => state)