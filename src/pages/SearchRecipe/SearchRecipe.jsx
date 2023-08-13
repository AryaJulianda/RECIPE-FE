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
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 2;
    const {recipes,isLoading,isError} = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        dispatch(getAllRecipes(searchQuery,currentPage,limit));
    },[currentPage,limit])

    useEffect(()=>{
        searchQuery.length >= 3 && dispatch(getAllRecipes(searchQuery,currentPage,limit))
        searchQuery == '' &&  dispatch(getAllRecipes(searchQuery,currentPage,limit))
      },[searchQuery,currentPage,limit])

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(getAllRecipes(searchQuery));
    }

    const handleClick = (recipeId) => {
        navigate(`/detail-recipe/${recipeId}`)
    }

    // // Pagination
    // const totalPages = Math.ceil(recipes.totalCount / limit);

    // const handlePageChange = (newPage) => {
    //     if (newPage >= 1 && newPage <= totalPages) {
    //         setCurrentPage(newPage);
    //     }
    // };

    const onNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const onPrev = () => {
        setCurrentPage(currentPage - 1)
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
                <Pagination onNext={onNext} onPrev={onPrev}/>
            </main>
            <Footer/>
        </>
    )
}