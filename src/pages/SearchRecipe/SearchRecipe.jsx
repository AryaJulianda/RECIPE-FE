import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Pagination from '../../components/Pagination/Pagination';
import Footer from "../../components/Footer/Footer";

import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export default function SearchRecipe () {
    const [recipes,setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate()

    const getAllRecipe = (query = '') => {
        const url = query ? `${serverUrl}/recipe/search?key=` + query : `${serverUrl}/recipe`
            axios.get(url)
                .then(res => { 
                    // console.log('Get Data successfully :' , res.data);
                    res.data === '' ? alert('Recipe not found') : setRecipes(res.data);
                })
                .catch(err => console.log('Get data failed',err))
    }

    useEffect(()=> {
        getAllRecipe();
        // console.log('Get all data success:',recipes);
    },[])

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        // console.log(e.target.value)
    }

    const handleSubmit = () => {
        getAllRecipe(searchQuery);
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