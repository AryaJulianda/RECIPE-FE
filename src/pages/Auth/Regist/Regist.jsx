import React,{useState} from "react";
import {useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ModalComponent from '../../../components/Modal/Modal';
import { connect, useDispatch, useSelector } from 'react-redux';
import {login,regist}  from '../../../actions/authAction';
import Loading from '../../../components/Loading/Loading'
import './Regist.css';

const Regist = ({regist}) => {

    const {showModal,modalMessage,authLoading} = useSelector((state) => state.auth)
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputData, setInputData] = useState({
        username:'',
        email:'',
        password:''
    });

    const postData = (e) => {
        e.preventDefault()
        if(!isUsernameValid(inputData.username)) return dispatch({type:'SHOW_MODAL',modalMessage:{text:'Username is required',header:'Regist Failed'}})
        if(!isEmailValid(inputData.email)) return dispatch({type:'SHOW_MODAL',modalMessage:{text:'Email not valid',header:'Regist Failed'}})
        if(!isPasswordValid(inputData.password)) return dispatch({type:'SHOW_MODAL',modalMessage:{text:'Password must have at least 8 character',header:'Regist Failed'}})
        regist(inputData);
    }

    const onChange = (e) => {
        setInputData({...inputData,
        [e.target.name]:e.target.value
        })
    }

    const handleCloseModal = () => {
        dispatch({type:"CLOSE_MODAL"})
    }
    // console.log({showModal})

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };
      
    const isPasswordValid = (password) => {
    return password.length >= 8;
    };

    const isUsernameValid = (username) => {
    return username.length >= 1;
    };

    console.log({modalMessage})
  return (
    <>{authLoading? <Loading/> :
    <section className="regist">

        <header>
            <img src="../img/logo.svg" alt="" />
            <h2 className="brand">Mama Recipe</h2>
            <h1 className="text-center" >Let's Get Started!</h1>
            <h3 className="text-center px-3">Create new account to access all features</h3>
        </header>

        <div className="regist-form">
            <form action="">
                <div className="mb-3 input-field">
                    <label htmlFor="inputName" className="form-label d-block">Name</label>
                    <input type="text" name='username' value={inputData.username} onChange={onChange} className="form-input" id="inputName" placeholder="Name" />
                </div>
                <div className="mb-3 input-field">
                    <label htmlFor="inputEmail" className="form-label d-block">Email</label>
                    <input type="email" name="email" value={inputData.email} onChange={onChange} className="form-input" id="inputEmail" placeholder="Enter email address" />
                </div>
                <div className="mb-3 input-field">
                    <label htmlFor="inputPassword" className="form-label d-block">Password</label>
                    <input type="password" name="password" value={inputData.password} onChange={onChange} className="form-input" id="inputPassword" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="check" checked={isChecked} onChange={()=> setIsChecked(!isChecked)}/>
                    <label className="form-check-label" htmlFor="check">I agree to terms & conditions</label>
                </div>
                <button className="btn regist-button" type="button" data-bs-toggle="modal" data-bs-target="#verifModal" onClick={postData} disabled={!isChecked}>Register Account</button>
                <p className="forgot-password">Forgot your Password <a href="#">Click Here</a></p>
            </form>
        </div>
        <p className="login-here text-center">Already have account? <Link to={'/login'}>Log in Here</Link></p>
        
        <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
    </section>
    }</>
        
  )
};

const mapDispatch = {
    regist,
}

export default connect(null,mapDispatch)(Regist);
