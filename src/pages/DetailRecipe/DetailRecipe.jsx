import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../../components/Navbar/Navbar";
import InfoProfile from '../../components/InfoProfile/InfoProfile';
import Footer from '../../components/Footer/Footer';
import DataRecipe from '../../components/DataRecipe/DataRecipe';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../actions/recipeAction";
import Loading from "../../components/Loading/Loading";

export default function DetailRecipe () {

    const {recipe,isLoading} = useSelector((state) => state.recipes)
    const user = {
        created_at: recipe.created_at,
        username: recipe.author,
        photo:recipe.author_photo
    }
    const {recipeId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeById(recipeId));
    }, [recipeId]);

    return(
        <>{isLoading? <Loading/> :
            <>
                <Navbar />
                <main>
                    <InfoProfile user={user}/>  
                    <DataRecipe recipe={recipe}/>
                </main>
                <Footer />
            </>}
        </>
    );
};
