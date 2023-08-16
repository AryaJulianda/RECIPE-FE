import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById, updateRecipe } from "../../actions/recipeAction";

import Navbar from "../../components/Navbar/Navbar";
import FormEditRecipe from "../../components/FormRecipe/FormEditRecipe";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal';
import Loading from "../../components/Loading/Loading";

export default function EditRecipe () {

    const {recipeId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {recipe,isLoading} = useSelector((state) => state.recipes)
    const {showModal,modalMessage} = useSelector((state)=> state.recipes)

    const [inputRecipe, setInputRecipe] = useState({
        title:'',
        ingredients: ''
    }) 
    const [recipeImage,setRecipeImage] = useState('');
    const [showImage,setShowImage] = useState('');
    const [categoryId,setCategoryId] = useState('')

    useEffect(() => {
        dispatch(getRecipeById(recipeId));
    }, [dispatch,recipeId]);

    useEffect(()=>{
        if(recipe) {
            setInputRecipe({
                title:recipe.title,
                ingredients:recipe.ingredients
            })
            setShowImage(recipe.img)
            setRecipeImage(recipe.img)
            setCategoryId(recipe.category_id)
        }
    },[recipe])

    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title',inputRecipe.title);
        formData.append('ingredients',inputRecipe.ingredients);
        formData.append('category_id',categoryId);
        formData.append('img',recipeImage);

        dispatch(updateRecipe(recipeId,formData))
    }

    const handleCloseModal = () => {
        dispatch({type:"CLOSE_MODAL"});
        navigate('/detail-profile');
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setShowImage(URL.createObjectURL(file));
        setRecipeImage(file);
    }

    return(
        <>{isLoading? <Loading/> :
            <>
                <Navbar />
                <main>
                    <FormEditRecipe 
                        recipe={recipe}
                        inputRecipe={inputRecipe}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        handleChangeImage={handleChangeImage}
                        showImage={showImage}
                        setCategoryId={setCategoryId}
                        categoryId={categoryId}
                    />  
                </main>
                <Footer />
                <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
            </>}
        </>
       
    );
};
