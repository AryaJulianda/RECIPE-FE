import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeById(recipeId));
    }, [recipeId]);

    return(
        <>{isLoading? <Loading/> :
            <>
                <Navbar />
                <main>
                    <DataRecipe recipe={recipe}/>
                </main>
                <Footer />
            </>}
        </>
    );
};
