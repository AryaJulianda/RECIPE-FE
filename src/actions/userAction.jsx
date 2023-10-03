import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const updateUser = (user,inputData) => async(dispatch) => {
  const {user_id} = user
  try {
    dispatch({type:'LOGIN_PENDING'})
    const response = await axios.put(url+'/user/edit/'+user_id,inputData,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type':'multipart/form-data'
      }});

    console.log('UPDATE success');
    dispatch({type:'UPDATE_USER_SUCCESS',payload:response.data.new_data});
    // navigate('/');
  } catch (error) {
    dispatch({
      type:'UPDATE_USER_FAILED',
      error:error.response.data.message,
      modalMessage:{
        header:'Edit User failed!',
        text:error.response.data.message}
      });
  }
}