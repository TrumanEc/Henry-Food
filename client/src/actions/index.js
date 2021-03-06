import axios from 'axios'

export const getRecipes = () => async dispatch => {
    
    try{
        const recipes = await axios.get('https://henry-food-back.herokuapp.com/recipes')
        console.log('accion get recipes')
        console.log(recipes)
        dispatch( {
            type: 'GET_RECIPES',
            payload: recipes.data
        })
    }
    catch(e){
        console.log(e)
    }

}
export const getRecipesMatch = (name) => async dispatch => {
    
    try{
        const recipes = await axios.get(`https://henry-food-back.herokuapp.com/recipes?name=${name}`)
        console.log('accion get match recipes')
        console.log(recipes.data)
        dispatch( {
            type: 'GET_RECIPES_MATCH',
            payload: recipes.data
        })
    }
    catch(e){
        console.log(e)
    }

}

export const getRecipeInfo = (id) => async dispatch => {
    
    try{
        const info = await axios.get(`https://henry-food-back.herokuapp.com/recipes/${id}`)
        console.log('accion get recipe info')
        console.log(info.data)
        dispatch( {
            type: 'GET_RECIPE_INFO',
            payload: info.data
        })
    }
    catch(e){
        console.log(e)
    }

}

export const getTypes = () => async dispatch => {
    try{
        const dietTypes = await axios.get(`https://henry-food-back.herokuapp.com/types`)
        console.log('accion get types')
        console.log(dietTypes)
        dispatch( {
            type: 'GET_TYPES',
            payload: dietTypes.data
        })
    }
    catch(e){
        console.log(e)
    }

}

export const postRecipe = (newRecipe) => async dispatch => {
    try{
        // const recipes = (name) ? await axios.get(`https://henry-food-back.herokuapp.com/recipes?name=${name}`) : await axios.get(`https://henry-food-back.herokuapp.com/recipes`);
        const recipe = await axios.post(`https://henry-food-back.herokuapp.com/recipes`, newRecipe)
        console.log('accion post recipe')
        console.log(recipe)
        getRecipes();
        dispatch( {
            type: 'POST_RECIPE',
            payload: recipe.data
        })
    }
    catch(e){
        console.log(e)
    }

}

export const setUpRecipes = (payload)  => {
    return {
        type: 'SET_UP_RECIPES',
        payload: payload
    }
}

export const sortByName = (payload)  => {
    return {
        type: 'SORT_BY_NAME',
        payload: payload
    }
}

export const sortByScore = (payload)  => {
    return {
        type: 'SORT_BY_SCORE',
        payload: payload
    }
}

export const filterDiets = (payload)  => {
    return {
        type: 'FILTER_DIETS',
        payload: payload
    }
}