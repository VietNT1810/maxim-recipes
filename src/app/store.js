import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from '../pages/Recipes/recipeSlide'

const rootReducer = {
    recipes: recipeReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;