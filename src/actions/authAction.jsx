import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const login = (inputData,navigate) => async(dispatch) => {
  try {
    dispatch({type:'LOGIN_PENDING'})
    const response = await axios.post(url+`/auth/login`,inputData);
    localStorage.setItem("access_token",response.data.accessToken);
    console.log('login success');
    dispatch({type:'LOGIN_SUCCESS',payload:response.data});
    navigate('/');
  } catch (error) {
    console.log('nih error',inputData,error)
    dispatch({
      type:'LOGIN_FAILED',
      error:error,
      modalMessage:{
        header:'Regist failed!',
        text:error.response.data.message}
      });
  }
}

export const regist = (inputData,navigate) => async(dispatch) => {
  try {
    dispatch({type:'REGIST_PENDING'})
    const response = await axios.post(url+`/auth/register`,inputData);
    console.log('regist success',inputData);
    dispatch({type:'REGIST_SUCCESS',payload:response.data,modalMessage:{header:'You are all set!',text:'Please login'}});
    navigate('/login');
  } catch (error) {
    console.log('regist failed',inputData,error)
    dispatch({type:'REGIST_FAILED',error:error.response.data.message,modalMessage:{header:'Regist failed!',text:error.response.data.message}});
  }
}

