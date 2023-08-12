import React,{useState} from "react";
import { useNavigate } from "react-router";
import ModalComponent from '../../../components/Modal/Modal';
import { connect, useDispatch, useSelector } from 'react-redux';
import {login,regist}  from '../../../actions/authAction';
import './Regist.css';

const Regist = ({regist}) => {

    const {showModal,modalMessage} = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputData, setInputData] = useState({
        username:'',
        email:'',
        password:''
    });

    const postData = (e) => {
        e.preventDefault()
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

  return (
      <section className="regist">

        <header>
            <img src="../img/logo.svg" alt="" />
            <h2 className="brand">Mama Recipe</h2>
            <h1 className="text-center" >Let's Get Started!</h1>
            <h3 className="text-center">Create new account to access all features</h3>
        </header>

        <div className="regist-form">
            <form action="">
                <div className="mb-3 input-field">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" name='username' value={inputData.username} onChange={onChange} className="form-control" id="inputName" placeholder="Name" />
                </div>
                <div className="mb-3 input-field">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" name="email" value={inputData.email} onChange={onChange} className="form-control" id="inputEmail" placeholder="Enter email address" />
                </div>
                <div className="mb-3 input-field">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" name="password" value={inputData.password} onChange={onChange} className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="check" />
                    <label className="form-check-label" htmlFor="check">I agree to terms & conditions</label>
                </div>
                <button className="btn regist-button" type="button" data-bs-toggle="modal" data-bs-target="#verifModal" onClick={postData} >Register Account</button>
                <p className="forgot-password">Forgot your Password <a href="#">Click Here</a></p>
            </form>
        </div>
        <p className="login-here text-center">Already have account? <a href="#">Log in Here</a></p>
         
         <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
    </section>
  )
};

const mapDispatch = {
    regist,
}

export default connect(null,mapDispatch)(Regist);
