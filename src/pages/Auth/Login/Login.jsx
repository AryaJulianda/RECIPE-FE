import React,{useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import './Login.css';

import axios from 'axios';

const Login = () => {

    const url = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email:'',
        password:''
    })

    const postData = (e) => {
        e.preventDefault()
        console.log(inputData)
        axios.post(url+`/auth/login`,inputData)
            .then((res)=> {console.log(res)
            let photo = res.data.user.photo;
            if(photo === null){photo = '../img/default-photo-profile.jpg'}
            localStorage.setItem("access_token",res.data.accessToken)
            localStorage.setItem("refresh_token",res.data.refreshToken)
            localStorage.setItem("user_id",res.data.user.user_id)
            localStorage.setItem("username",res.data.user.username) 
            localStorage.setItem("email",res.data.user.email)
            localStorage.setItem("photo",photo)
            navigate('/')
            })
            .catch((err)=>{alert(err.response.data.message)})
    }

    const onChange = (e) => {
        setInputData({...inputData,
        [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <main>
            <header>
                <img src="../img/logo.svg" alt="" />
                <h2 className="brand">Mama Recipe</h2>
                <h1>Welcome</h1>
                <h3>Login in into your exist account</h3>
            </header>

            <div className="login-form">
                <form action="">
                    <div className="mb-3 input-field">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" name='email' value={inputData.email} className="form-control" id="inputEmail" placeholder="Enter email address" onChange={onChange} />
                    </div>
                    <div className="mb-3 input-field">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" name='password' value={inputData.password} className="form-control" id="inputPassword" placeholder="Password" onChange={onChange} />
                    </div>
                    <div className="form-check my-4">
                        <input type="checkbox" className="form-check-input" id="check"/>
                        <label className="form-check-label" htmlFor="check">I agree to terms & conditions</label>
                    </div>
                    <button type="button" className="btn login-button" data-bs-toggle="modal" data-bs-target="#verifModal" onClick={(e) => postData(e)} >Login</button>
                    <p className="forgot-password">Forgot your Password <a href="#">Click Here</a></p>
                </form>
            </div>
            <p className="singup-here text-center">Don't have an account? <a href="#">Sing up Here</a></p>
        </main>
        </div>
    )
};

export default Login;
