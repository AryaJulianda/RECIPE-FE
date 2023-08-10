import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import FormAddRecipe from "../../components/FormRecipe/FormAddRecipe";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal';

import axios from 'axios';


const AddRecipe = () => {

    const serverUrl = import.meta.env.VITE_SERVER_URL;
    const token = localStorage.getItem('access_token');
    
    const navigate = useNavigate();
    const [showModal,setShowModal]= useState(false);
    const [modalMessage, setModalMessage] = useState({});

    const [categoryId, setCategoryId] = useState(null);
    const [recipeImage,setRecipeImage] = useState({});
    const [recipe,setRecipe] = useState({
        title:'',
        ingredients:''
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value
        }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title',recipe.title);
        formData.append('ingredients',recipe.ingredients);
        formData.append('category_id',categoryId);
        formData.append('img',recipeImage.send);
        // console.log('ini form data',formData)

        axios.post(`${serverUrl}/recipe`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type':'multipart/form-data' 
            }
          }).then((res) => {
                // console.log('Post recipe Successfully :',res.data);
                setModalMessage({header:'Add recipe successfuly'})
                handleShowModal();
            })
            .catch((err) => {
                // console.error('Post recipe Failed',err.message);
                setModalMessage({header:'Add recipe failed',text:err.message})
                handleShowModal();
            })
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/detail-profile');
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        const urlShow = URL.createObjectURL(file)
        setRecipeImage({show :urlShow,send: file});
    }

    return(
        <>
            <Navbar />
            <main>
                <FormAddRecipe 
                    recipe={recipe}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    setCategoryId={setCategoryId}
                    recipeImage={recipeImage}
                    handleChangeImage={handleChangeImage}
                />  
            </main>
            <Footer />
            <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
        </>
    );
};

export default AddRecipe;