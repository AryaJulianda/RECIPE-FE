import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../../components/navbar/navbar";
import FormEditRecipe from "../../components/FormRecipe/FormEditRecipe";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal';

const token = import.meta.env.VITE_API_TOKEN;

export default function EditRecipe () {

    const {recipeId} = useParams();
    const navigate = useNavigate();
    const [showModal,setShowModal]= useState(false);
    const [modalMessage, setModalMessage] = useState({});
    // console.log('ini recipe id',recipeId)


    const [recipeImage,setRecipeImage] = useState(null);
    const [showImage,setShowImage] = useState(null);
    const [recipe, setRecipe] = useState({
        title:"",
        ingredients:""
    }) 
    const [categoryId, setCategoryId] = useState('');

    const getRecipeById = async () => {
        await axios.get('http://localhost:4000/recipe/'+ recipeId ,{
            headers :{
            Authorization : `Bearer ${token}`
        }})
            .then(res => { 
                // console.log('Get Data successfully :' , res.data);
                setRecipe({
                    ...recipe,
                    title:res.data.title,
                    ingredients:res.data.ingredients
                });

                setCategoryId(res.data.category_id);
                setRecipeImage(res.data.img);
                setShowImage(res.data.img);
            })
            .catch(err => console.log('Get data failed',err.response.data.message))
    }

    useEffect(() => {
        // console.log(recipe)
        getRecipeById();
    },[]);


    const handleChange = (event) => {
        const {name,value} = event.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
        // console.log(recipe,recipeImage)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // if(recipeImage===null) {setRecipeImage(recipe.img)};;

        const formData = new FormData();
        formData.append('title',recipe.title);
        formData.append('ingredients',recipe.ingredients);
        formData.append('category_id',categoryId);
        formData.append('img',recipeImage);

        // console.log(formData.category_id);
        // console.log('ini form data',formData)

        axios.put(`http://localhost:4000/recipe/${recipeId}`, formData, {
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

    const handleShowModal = () => {
        setShowModal(true);
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
                    onSubmit={handleSubmit}
                    handleChangeImage={handleChangeImage}
                    showImage={showImage}
                    setCategoryId={setCategoryId}
                    categoryId={categoryId}
                />  
            </main>
            <Footer />
            <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
        </>
    );
};
