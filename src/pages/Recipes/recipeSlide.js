import { createSlice } from '@reduxjs/toolkit'

const recipe = createSlice({
    name: 'recipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload)
        },
        removeRecipe: (state, action) => {
            const removeRecipeId = action.payload;
            state = state.filter(recipe => recipe.id != removeRecipeId);
            return state;
        }
    }
});

const { reducer, actions } = recipe;
export const { addRecipe, removeRecipe } = actions;

export default reducer;