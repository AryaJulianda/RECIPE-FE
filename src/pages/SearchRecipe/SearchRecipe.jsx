import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Pagination from '../../components/Pagination/Pagination';
import Footer from "../../components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../actions/recipeAction";

export default function SearchRecipe () {

    const [searchQuery,setSearchQuery] = useState('');
    const {recipes,isLoading,isError} = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        dispatch(getAllRecipes());
    },[])

    useEffect(()=>{
        searchQuery.length >= 3 && dispatch(getAllRecipes(searchQuery))
        searchQuery == '' &&  dispatch(getAllRecipes())
      },[searchQuery])

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(getAllRecipes(searchQuery));
    }

    const handleClick = (recipeId) => {
        navigate(`/detail-recipe/${recipeId}`)
    }

    return (
        <>
            <Navbar/>
            <main>
                <Header/>
                <SearchBar
                    value={searchQuery}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <Cards recipes={recipes} onClick={handleClick}/>
                <Pagination/>
            </main>
            <Footer/>
        </>
    )
}