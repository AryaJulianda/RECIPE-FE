const initialState = {
  recipes: [],
  recipe:{},
  myRecipes:[],
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{}
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        console.log('loading...')
        return {
            ...state,
            isLoading:true,
        };
      //get recipe by recipe id
      case 'GET_RECIPE_SUCCESS':
        return {
            ...state,
            recipe: action.payload,
        };
      case 'GET_RECIPE_FAILED':
        return {
          ...state,
          isError: true
        }

      // get all recipes
      case 'GET_RECIPES_SUCCESS':
        return {
            ...state,
            recipes: action.payload,
        };
      case 'GET_RECIPES_FAILED':
        return {
          ...state,
          isError: true
        }

      // get recipes by user id
      case 'GET_RECIPES_BY_ID_SUCCESS':
        return {
            ...state,
            myRecipes: action.payload,
        };
      case 'GET_RECIPES_BY_ID_FAILED':
        return {
          ...state,
          myRecipes: [],
          isError: true
        }

      // post recipe
      case 'POST_RECIPE_SUCCESS':
        return {
            ...state,
            showModal:true,
            modalMessage:{
              header:"Add Recipe Successfully"
            }
        };
      case 'POST_RECIPE_FAILED':
        return {
          ...state,
          isError: true,
          showModal:true,
          modalMessage:{
            header:'Add Recipe failed'
          }
        }

      // put recipe
      case 'PUT_RECIPE_SUCCESS':
        return {
            ...state,
            showModal:true,
            modalMessage:{
              header:"Edit Recipe Successfully"
            }
        };
      case 'PUT_RECIPE_FAILED':
        return {
          ...state,
          isError: true,
          showModal:true,
          modalMessage:{
            header:'Edit Recipe failed'
          }
        }

      //delete recipe
      case 'DELETE_RECIPE_SUCCESS':
        return {
            ...state,
            showModal:true,
            modalMessage:{
              header:"Delete Recipe Successfully"
            }
        };
      case 'DELETE_RECIPE_FAILED':
        return {
          ...state,
          isError: true,
          showModal:true,
          modalMessage:{
            header:'Delete Recipe failed'
          }
        }

      case 'CLOSE_MODAL':
        return{
          ...state,
          showModal : false
        }
      default:
        return state;
  }
};

