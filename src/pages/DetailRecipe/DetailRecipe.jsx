import {useState,useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../../components/navbar/navbar";
import InfoProfile from '../../components/InfoProfile/InfoProfile';
import Footer from '../../components/Footer/Footer';
import DataRecipe from '../../components/DataRecipe/DataRecipe';

export default function DetailRecipe () {

    const [recipe,setRecipe] = useState([]);
    const {recipeId} = useParams();
    const navigate = useNavigate();

    const getRecipeById = async () => {
        await axios.get('http://localhost:4000/recipe/'+ recipeId)
            .then(res => { 
                // console.log('Get Data successfully :' , res.data);
                setRecipe(res.data);
            })
            .catch(err => console.log('Get data failed',err.response.data.message))
    }

    useEffect(() => {
        // console.log(recipe)
        getRecipeById();
    },[]);

    return(
        <>
            <Navbar />
            <main>
                <InfoProfile />  
                <DataRecipe recipe={recipe}/>
            </main>
            <Footer />
        </>
    );
};
