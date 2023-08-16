import React,{useState,useEffect} from "react"
import './EditProfile.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUser } from "../../actions/userAction";

const EditProfile = () => {

  const {user} = useSelector((state)=> state.auth)
  console.log(user)
  // const userId = user.user_id
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    // const {showModal,modalMessage} = useSelector((state)=> state.recipes)

    const [inputUser, setInputUser] = useState({username:''}) 

    const [photoProfile,setPhotoProfile] = useState('');
    const [showPhoto,setShowPhoto] = useState('');

    useEffect(()=>{
        if(user) {
            setInputUser({username:user.username})
            setPhotoProfile(user.photo)
            setShowPhoto(user.photo)
        }
    },[user])

    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputUser(() => ({
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('username',inputUser.username);
        formData.append('img',photoProfile);

        dispatch(updateUser(user,formData))
    }

    // const handleCloseModal = () => {
    //     dispatch({type:"CLOSE_MODAL"});
    //     navigate('/search-recipe');
    // }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setShowPhoto(URL.createObjectURL(file));
        setPhotoProfile(file);
    }

  return (
    <div>
      <Navbar/>
      <main>
       
        <div className="edit-photo-profile">
            <div className="photo-profile" style={{ backgroundImage: `url(${showPhoto === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : showPhoto})`}} ></div>
            <label htmlFor="file-upload" className="label-file-upload" style={{textAlign:'center'}}>Change Photo Profile</label>
            <input type="file" id="file-upload" onChange={(e) => handleChangeImage(e)}/>
        </div>
   
        <form action="" className="form-edit-profile">
            <div className="input-field">
                <label htmlFor="inputEmail" className="form-label">Name</label>
                <input name='username' type="text" className="form-control" id="inputName" placeholder="Name" value={inputUser.username} onChange={handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="inputPassword" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={user?.email} readOnly/>
            </div>
            <button className="btn update-button" type="button" onClick={handleSubmit}>Update</button>
            <p className="change-password">Change Password? <a href="">Click Here</a></p>
        </form>
    </main>
    <Footer/>
    </div>
  )
};

export default EditProfile;
