import { createSelector } from "reselect"

const selectCategoryItem = (state) => state.categories

export const selectCategories = createSelector (
  [selectCategoryItem],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector (
  [selectCategories],
  (categories) => categories.reduce((accumulator, category) => {
    const { title, items } = category
    accumulator[title.toLowerCase()] = items
    return accumulator
  }, {})
)