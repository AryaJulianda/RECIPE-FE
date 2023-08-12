const initialState = {
  user: {},
  accessToken: null,
  refreshToken:null,
  isLoading:false,
  isError:false,
  error:null,
  showModal:false,
  modalMessage:{}
}

export const authReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'LOGIN_PENDING' || 'REGIST_PENDING':
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
        refreshToken: action.payload.refreshToken
      }
    case 'LOGIN_FAILED':
      // console.log(action.error)
      return {
        ...state,error:action.error,isError:true,user:null,isLoading:false
      }
    case 'REGIST_SUCCESS':
      console.log(action)
      return {
        ...state,
        user: action.payload.user,
        accessToken : action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        showModal:true,
        modalMessage:action.modalMessage
      }
    case 'REGIST_FAILED':
      // console.log(action.modalMessage,action.error)
      return {
        ...state,error:action.error,isError:true,user:null,isLoading:false,
        showModal: true,modalMessage:action.modalMessage
      }
    case 'ACTIVATION_SUCCESS':
      return {
        ...state,showModal:true,modalMessage: action.modalMessage
      }
    case 'CLOSE_MODAL':
      return {
        ...state,showModal: false
      } 
    default :
      return state;
  }
}