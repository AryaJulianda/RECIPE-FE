import axios from 'axios';
import { useSelector } from 'react-redux';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getRecipeById = (recipeId) => {
    return async(dispatch) => {
        const url =`${serverUrl}/recipe/`+ recipeId
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(url);
          dispatch({type:'GET_RECIPE_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_RECIPE_FAILED',error:err.message})
        }
    };
};

export const getAllRecipes = (query = '') => {
    return async(dispatch) => {
        const url = query ? `${serverUrl}/recipe/search?key=${query}` : `${serverUrl}/recipe`;
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(url);
          dispatch({type:'GET_RECIPES_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_RECIPES_FAILED',error:err.message})
        }
    };
};

export const getAllRecipesById = () => {
    return async(dispatch,useSelector) => {
        const {auth} = useSelector((state)=> state)
        const user_id = auth.user.user_id;
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(`${serverUrl}/recipe/my_recipe/` + user_id)
          dispatch({type:'GET_RECIPES_BY_ID_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_RECIPES_BY_ID_FAILED',error:err.message})
        }
    };
};

export const postRecipe = (inputData) => {
  return async(dispatch) => {
    
    try {
      dispatch({type:'PENDING'})
      const res = await axios.post(`${serverUrl}/recipe`, inputData,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type':'multipart/form-data'
        }})
      dispatch({type:'POST_RECIPE_SUCCESS',payload:res.data})
    } catch (error) {
      dispatch({type:'POST_RECIPE_FAILED',error:error.message})
    }
  }
}

export const deleteRecipe = (recipeId) => {
  return async(dispatch) => {
    
    try {
      dispatch({type:'PENDING'})
      const res = await axios.delete(`${serverUrl}/recipe/${recipeId}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('access_token')}`
        }})
      dispatch({type:'DELETE_RECIPE_SUCCESS',payload:res.data})
    } catch (error) {
      dispatch({type:'DELETE_RECIPE_FAILED',error:error.message})
    }
  }
}