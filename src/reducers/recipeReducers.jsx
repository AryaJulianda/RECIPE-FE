const initialState = {
  recipes: [],
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

      case 'GET_RECIPES_BY_ID_SUCCESS':
        return {
            ...state,
            myRecipes: action.payload,
        };
      case 'GET_RECIPES_BY_ID_FAILED':
        return {
          ...state,
          isError: true
        }

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

