import React,{useState,useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {login} from '../../../actions/authAction';
import ModalComponent from '../../../components/Modal/Modal';
import Loading from '../../../components/Loading/Loading'
import './Login.css';

const Login = ({}) => {

    const {authLoading,showModal,modalMessage} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email:'',
        password:''
    })
    const postData = () => {
        console.log(inputData);
        dispatch(login(inputData,navigate))
    }

    const onChange = (e) => {
        setInputData({...inputData,
        [e.target.name]:e.target.value
        })
    }

    const handleCloseModal = () => {
        dispatch({type:"CLOSE_MODAL"})
        console.log('harusnya nutup')
    }

    const areAllInputsFilled = inputData.email.trim() !== '' && inputData.password.trim() !== '';

    return (
        <>{authLoading? <Loading /> :
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
                            <label htmlFor="inputEmail" className="form-label d-block">Email</label>
                            <input type="email" name='email' value={inputData.email} className="form-input" id="inputEmail" placeholder="Enter email address" onChange={onChange} />
                        </div>
                        <div className="mb-3 input-field">
                            <label htmlFor="inputPassword" className="form-label d-block">Password</label>
                            <input type="password" name='password' value={inputData.password} className="form-input" id="inputPassword" placeholder="Password" onChange={onChange} />
                        </div>
                        <button type="button" className="btn login-button mt-4" data-bs-toggle="modal" data-bs-target="#verifModal" onClick={postData} disabled={!areAllInputsFilled}>Login</button>
                        <p className="forgot-password">Forgot your Password <a href="#">Click Here</a></p>
                    </form>
                </div>
                <p className="singup-here text-center">Don't have an account? <Link to={'/regist'}>Sing up Here</Link></p>
                <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
            </main>
        </div>
        }</>

    )
};

export default Login;
