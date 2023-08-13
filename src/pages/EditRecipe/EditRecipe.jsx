import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../../components/Navbar/Navbar";
import FormEditRecipe from "../../components/FormRecipe/FormEditRecipe";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../actions/recipeAction";

export default function EditRecipe () {

    const {recipeId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {showModal,modalMessage} = useSelector((state)=> state.recipes)

    const {recipe} = useSelector((state) => state.recipes)
    const [isRecipeLoaded, setIsRecipeLoaded] = useState(false); 

    const [recipeImage,setRecipeImage] = useState(null);
    const [showImage,setShowImage] = useState(null);
    const [inputRecipe, setInputRecipe] = useState({
        title:"",
        ingredients:""
    }) 
    const [categoryId, setCategoryId] = useState('');
    
    useEffect(() => {
        dispatch(getRecipeById(recipeId));
    }, [dispatch, recipeId]);

    useEffect(() => {
        if (recipe && !isRecipeLoaded) {
            setInputRecipe({
                ...inputRecipe,
                title: recipe.title,
                ingredients: recipe.ingredients
            });
            setCategoryId(recipe.category_id);
            setRecipeImage(recipe.img);
            setShowImage(recipe.img);
    
            setIsRecipeLoaded(true);
        }
    }, [recipe, isRecipeLoaded]);

    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // if(recipeImage===null) {setRecipeImage(recipe.img)};;

        const formData = new FormData();
        formData.append('title',inputRecipe.title);
        formData.append('ingredients',inputRecipe.ingredients);
        formData.append('category_id',categoryId);
        formData.append('img',recipeImage);

        // console.log(formData.category_id);
        // console.log('ini form data',formData)

        axios.put(`${serverUrl}/recipe/${recipeId}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type':'multipart/form-data' 
            }
          }).then((res) => {
                console.log('Edit recipe Successfully :',res.data);
                setModalMessage({header:'Edit recipe Successfully'})
                handleShowModal()
            })
            .catch((err) => {
                setModalMessage({header:'Edit recipe failed',text:err.message})
                handleShowModal()
                // console.error('Edit recipe Failed',err.message);
            })
    }

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/detail-profile');
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setShowImage(URL.createObjectURL(file));
        setRecipeImage(file);
    }

    return(
        <>
            <Navbar />
            <main>
                <FormEditRecipe 
                    recipe={recipe}
                    onChange={handleChange}
                    // onSubmit={handleSubmit}
                    handleChangeImage={handleChangeImage}
                    showImage={showImage}
                    setCategoryId={setCategoryId}
                    categoryId={categoryId}
                />  
            </main>
            <Footer />
            {/* <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/> */}
        </>
    );
};
