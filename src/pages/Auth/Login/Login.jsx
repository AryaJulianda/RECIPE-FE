import React,{useState,useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import {login} from '../../../actions/authAction';
import ModalComponent from '../../../components/Modal/Modal';
import Loading from '../../../components/Loading/Loading'
import './Login.css';

const Login = ({login}) => {

    const {showModal,modalMessage,isLoading} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email:'',
        password:''
    })

    const postData = (e) => {
        e.preventDefault()
        // console.log(inputData);
        login(inputData,navigate)
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


    return (
        <>{isLoading? <Loading /> :
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
                        <button type="button" className="btn login-button" data-bs-toggle="modal" data-bs-target="#verifModal" onClick={postData} >Login</button>
                        <p className="forgot-password">Forgot your Password <a href="#">Click Here</a></p>
                    </form>
                </div>
                <p className="singup-here text-center">Don't have an account? <Link to={'/regist'}>Sing up Here</Link></p>
                <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
            </main>
        </div>}
        </>

    )
};

const mapDispatch = {
    login,
}

export default connect(null,mapDispatch)(Login);
