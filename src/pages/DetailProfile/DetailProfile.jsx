import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
import NavProfile from '../../components/NavProfile/NavProfile';
import Recipes from '../../components/MyRecipes/MyRecipes';
import Pagination from "../../components/Pagination/Pagination";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal'

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, getAllRecipesById,getRecipeById } from "../../actions/recipeAction";
import Loading from "../../components/Loading/Loading";
import Bookmarked from "../../components/Bookmarked/Bookmarked";
import MyRecipes from "../../components/MyRecipes/MyRecipes";
import Liked from "../../components/Liked/Liked";
export default function DetailProfile () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const recipes = useSelector((state)=>state.recipes.myRecipes);
    const user = useSelector((state)=>state.auth.user);
    // console.log(recipes)

    const {showModal,modalMessage,isLoading} = useSelector((state)=> state.recipes)
    const [activeComponent, setActiveComponent] = useState('myRecipes');

    useEffect(()=> {
        dispatch(getAllRecipesById())
    },[])

    const handleClick = (recipeId) => {
        navigate(`/detail-recipe/${recipeId}`)
    }

    const handleDelete = (recipeId) => {
        dispatch(deleteRecipe(recipeId))
    };

    const handleEdit = (recipeId) => {
        // dispatch(getRecipeById(recipeId))
        navigate(`/edit-recipe/${recipeId}`);
    }

    const handleCloseModal = () => {
        dispatch({type:'CLOSE_MODAL'});
        dispatch(getAllRecipesById())
    }

    return(
    <>
        {isLoading? <Loading/> :
        <>
            <Navbar />
            <main className="min-vh-100">
                <NavProfile activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
                {activeComponent === 'myRecipes' && (<MyRecipes recipes={recipes} handleDelete={handleDelete} handleEdit={handleEdit} handleClick={handleClick}/>)}
                {activeComponent === 'bookmarked' && (<Bookmarked recipes={recipes} handleClick={handleClick}/>)}
                {activeComponent === 'liked' && (<Liked recipes={recipes} handleClick={handleClick}/>)}
            {/* <Pagination /> */}
            </main>
            <Footer />
            <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
        </>}
    </>
    );
} 


