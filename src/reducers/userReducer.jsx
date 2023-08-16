// const initialState = {
//   user: {},
//   isLoading:false,
//   isError:false,
//   error:null,
//   showModal:false,
//   modalMessage:{}
// }

// export const userReducer = (state=initialState,action) => {
//   switch (action.type) {
//     case 'PENDING':
//       console.log('loading...')
//       return {
//         ...state,isLoading:true
//       }
//     case 'UPDATE_USER_SUCCESS':
//       // console.log(action.payload)
//       return {
//         ...state,
//         user: action.payload,
//         isLoading:false
//       }
//     case 'UPDATE_USER_FAILED':
//       // console.log(action.error)
//       return {
//         ...state,
//         error:action.error,
//         isError:true,
//         showModal:true,
//         modalMessage:action.modalMessage,
//         isLoading:false
//       }
//     case 'CLOSE_MODAL':
//       return {
//         ...state,showModal: false,
//       } 
//     default :
//       return state;
//   }
// }