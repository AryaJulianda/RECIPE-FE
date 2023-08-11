import axios from "axios";

export const login = (inputData,navigate) => async(dispatch) => {
  try {
    const url = import.meta.env.VITE_SERVER_URL;
    dispatch({type:'LOGIN_PENDING'})
    const response = await axios.post(url+'/auth/login',inputData);
    localStorage.setItem("access_token",response.data.accessToken);
    console.log('login success');
    dispatch({type:'LOGIN_SUCCESS',payload:response.data});
    navigate('/');
  } catch (error) {
    dispatch({type:'LOGIN_FAILED',error:error.response.data.message});
  }
}