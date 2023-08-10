import React,{useState} from "react";
import { useNavigate } from "react-router";
import './Regist.css';
import ModalComponent from '../../../components/Modal/Modal';

import axios from 'axios';

const Regist = () => {
    const url = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate();
    const [showModal,setShowModal]= useState(false);
    const [modalMessage, setModalMessage] = useState({});

    const [inputData, setInputData] = useState({
        username:'',
        email:'',
        password:''
    });

    const postData = (e) => {
        e.preventDefault()
        console.log(inputData)
        axios.post(url+`/auth/register`,inputData)
            .then((res)=> {
                console.log(res)
                setModalMessage({header:'You are all set!',text:'Please check your email account for verification'})
                handleShowModal();
            })
            .catch((err)=>{
                console.log(err)
                setModalMessage({header:'Regist failed'})
                handleShowModal();
            })
    }

    

    const onChange = (e) => {
        setInputData({...inputData,
        [e.target.name]:e.target.value
        })
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        // navigate('/login');
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

export default Regist;
