const initialState = {
  user: {},
  accessToken: null,
  refreshToken:null,
  isLoading:false,
  isError:false,
  error:null
}

export const authReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      console.log('loading...')
      return {
        ...state,isLoading:true
      }
    case 'LOGIN_SUCCESS':
      // console.log(action.payload)
      return {
        ...state,
        user: action.payload.user,
        accessToken : action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading:false,
        isError:false,
        error:null
      }
    case 'LOGIN_FAILED':
      // console.log(action.error)
      return {
        ...state,error:action.error,isError:true,user:null,isLoading:false
      }
    default :
      return state;
  }
}