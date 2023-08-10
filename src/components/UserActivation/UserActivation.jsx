// import React from "react"
// import { useParams,useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserActivation = () => {

//     const navigate = useNavigate();
//     const {token} = useParams()
//     const serverUrl = import.meta.env.VITE_SERVER_URL;

//     axios.get(`${serverUrl}/auth/activate/` + token)
//     .then(res => { 
//         console.log('Activation acount successfully'.res.data);
//         setRecipes(res.data);
//         navigate('/regist')
//     })
//     .catch(err => {
//         console.log('User Activation failed',err)
//     })
 
//     return <h1>{token}</h1>
// };

// export default UserActivation;

import React, { useEffect } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const UserActivation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Mengambil nilai parameter query
    const token = queryParams.get("token");
    console.log(token)
    const navigate = useNavigate();
    // const { token } = useParams();
    const serverUrl = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        axios.get(`http://localhost:4000/auth/activate/` + token)
            .then(res => { 
                console.log('Activation account successfully', res.data);
                // Perform any necessary actions with the response data
                navigate('/login');
            })
            .catch(err => {
                console.log('User Activation failed', err);
                // Handle the error as needed
            });
    }, [token, navigate, serverUrl]);

    return <h1>{token}</h1>;
};

export default UserActivation;
