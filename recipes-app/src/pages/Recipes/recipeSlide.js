import { createSlice } from '@reduxjs/toolkit'

const iniit = [{
    "id": "1",
    "title": "Classic ratatouille",
    "description": "This moreish Mediterranean-style vegetable stew is perfect for a super-healthy midweek supper.",
    "serves": 4,
    "times": "1 HOUR 15 MINUTES",
    "difficulty": "SUPER EASY",
    "ingredients": "<ul><li>2 red onions</li><li>4 cloves of garlic</li><li>2 aubergines</li><li>3 courgettes</li><li>3 red or yellow peppers</li><li>6 ripe tomatoes</li><li>½ a bunch of fresh basil , (15g)</li><li>olive oil</li><li>a few sprigs of fresh thyme</li><li>1 x 400 g tin of quality plum tomatoes</li><li>1 tablespoon balsamic vinegar</li><li>½ a lemon</li></ul>",
    "method": "<ol><li>Prep your ingredients before you start – peel and cut the onions into wedges, then peel and finely slice the garlic. Trim the aubergines and courgettes, deseed the peppers and chop into 2.5cm chunks. Roughly chop the tomatoes. Pick the basil leaves and set aside, then finely slice the stalks.</li><li>Heat 2 tablespoons of oil in a large casserole pan or saucepan over a medium heat, add the chopped aubergines, courgettes and peppers (you may need to do this in batches) and fry for around 5 minutes, or until golden and softened, but not cooked through. Spoon the cooked veg into a large bowl.</li><li>To the pan, add the onion, garlic, basil stalks and thyme leaves with another drizzle of oil, if needed. Fry for 10 to 15 minutes, or until softened and golden.</li><li>Return the cooked veg to the pan and stir in the fresh and tinned tomatoes, the balsamic and a good pinch of sea salt and black pepper.</li><li>Mix well, breaking up the tomatoes with the back of a spoon. Cover the pan and simmer over a low heat for 30 to 35 minutes, or until reduced, sticky and sweet.</li><li>Tear in the basil leaves, finely grate in the lemon zest and adjust the seasoning, if needed. Serve with a hunk of bread or steamed rice.</li></ol>"
},
{
    "id": "2",
    "title": "Potato wedges",
    "description": "“These chunky, peppery golden potato wedges are always a winner at parties and barbecues ”",
    "serves": 4,
    "times": "45 MINUTES",
    "difficulty": "SUPER EASY",
    "ingredients": "<ul><li>sea salt</li><li>freshly ground black pepper</li><li>600 g baking potatoes</li><li>olive oil</li></ul>",
    "method": "<ul><li>To prepare and cook your potato wedges:</li><li>Preheat your oven to 200˚C/400˚F/gas 6. Put a large pan of salted water on to boil.</li><li>Scrub the potatoes clean and get rid of any gnarly bits. Cut the potatoes into chunky wedges. Add to the pan of boiling water and parboil for 8 minutes. Drain in a colander and leave to steam dry for a couple of minutes.</li><li>Transfer to a roasting tray and add a good lug of olive oil and a pinch of salt and pepper. Toss together so all the wedges are coated in the oil then spread out in one layer. Cook in the hot oven for 30 minutes until golden, crisp and cooked through. Delicious served with steak or chicken.</li></ul>"
},
{
    "id": "3",
    "ingredients": "<ul><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ul>",
    "method": "<ol><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ol>",
    "serves": "5",
    "title": "fish fillet",
    "description": "ádasd",
    "times": "10 hours",
    "difficulty": "hard"
},
{
    "id": "4",
    "title": "asdasd",
    "description": "asdasd",
    "serves": "2",
    "times": "asdasd",
    "difficulty": "asdad",
    "ingredients": "<ul><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ul>",
    "method": "<ol><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ol>"
},
{
    "id": "5",
    "title": "qaweqw",
    "description": "qweqweq",
    "serves": "6",
    "times": "10 hours",
    "difficulty": "medium",
    "ingredients": "<ul><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ul>",
    "method": "<ol><li>abc</li><li>xas</li><li>asd</li><li>sdf</li></ol>"
}];

const recipe = createSlice({
    name: 'recipes',
    initialState: iniit,
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