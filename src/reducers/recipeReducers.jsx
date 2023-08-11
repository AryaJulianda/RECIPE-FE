const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_SUCCESS':
        return { ...state, recipes: action.payload, loading: false, error: null };
      case 'FETCH_RECIPES_ERROR':
        return { ...state, loading: false, error: action.error };
      // ... tambahkan case lainnya sesuai kebutuhan
      default:
        return state;
    }
  };
  
  export default recipesReducer;