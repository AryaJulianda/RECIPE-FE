import React,{useState,useEffect} from "react";
import { useParams,Link, useNavigate} from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
import InfoProfile from '../../components/InfoProfile/InfoProfile';
import NavProfile from '../../components/NavProfile/NavProfile';
import Recipes from '../../components/Recipes/Recipes';
import Pagination from "../../components/Pagination/Pagination";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal'

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, getAllRecipesById,getRecipeById } from "../../actions/recipeAction";

export default function DetailProfile () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const recipes = useSelector((state)=>state.recipes.myRecipes);
    
    const {showModal,modalMessage} = useSelector((state)=> state.recipes)

    useEffect(()=> {
        dispatch(getAllRecipesById())
    },[])

    const handleDelete = (recipeId) => {
        dispatch(deleteRecipe(recipeId))
    };

    const handleEdit = (recipeId) => {
        navigate(`/edit-recipe/${recipeId}`);
    }

    const handleCloseModal = () => {
        dispatch({type:'CLOSE_MODAL'});
        dispatch(getAllRecipesById())
    }

    return(
        <>
            <Navbar />
            <main>
                <InfoProfile />
                <NavProfile/>
                <Link to='/add-recipe'>
                    <button className="btn btn-add-recipe" style={{width:'56%',padding:'20px',margin:'20px 20px -40px',fontSize:'20px',backgroundColor:'#67e711',color:'#fff'}}>
                        Add Recipe
                    </button>
                </Link>
                <Recipes recipes={recipes} handleDelete={handleDelete} handleEdit={handleEdit} />
                <Pagination />
            </main>
            <Footer />
            <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} modalMessage={modalMessage}/>
        </>
    );
} 


