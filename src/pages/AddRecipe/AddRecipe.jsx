import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import FormAddRecipe from "../../components/FormRecipe/FormAddRecipe";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal';

import { useDispatch, useSelector } from "react-redux";
import { postRecipe } from "../../actions/recipeAction";
import Loading from "../../components/Loading/Loading";


const AddRecipe = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {showModal,modalMessage,isLoading} = useSelector((state)=>state.recipes)

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

        dispatch(postRecipe(formData))
    }

    const handleCloseModal = () => {
        dispatch({type:"CLOSE_MODAL"});
        navigate('/detail-profile');
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        const urlShow = URL.createObjectURL(file)
        setRecipeImage({show :urlShow,send: file});
    }

    return(
        <>{ isLoading? <Loading/> :
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
            </>}
        </>
    );
};

export default AddRecipe;