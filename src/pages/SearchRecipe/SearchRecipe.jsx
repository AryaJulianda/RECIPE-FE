import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Pagination from '../../components/Pagination/Pagination';
import Footer from "../../components/Footer/Footer";
import Loading from '../../components/Loading/Loading'

import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../actions/recipeAction";

export default function SearchRecipe () {

    const [searchQuery,setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 5;
    const {recipes,totalCount,isLoading,isError} = useSelector((state)=> state.recipes);
    // console.log(recipes)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(()=> {
    //     // dispatch(getAllRecipes(searchQuery,currentPage,limit));
    // },[currentPage,limit])

    // useEffect(()=>{
    //     // setCurrentPage(1)
    //     searchQuery.length >= 3 && dispatch(getAllRecipes(searchQuery,currentPage,limit))
    //     searchQuery == '' &&  dispatch(getAllRecipes(searchQuery,currentPage,limit)) 
    //   },[searchQuery,currentPage,limit])

    useEffect(() => {
        if (searchQuery.length >= 3 || searchQuery === "") {
          setCurrentPage(1);
          dispatch(getAllRecipes(searchQuery, 1, limit));
        }
    }, [searchQuery, limit]);

    useEffect(() => {
    dispatch(getAllRecipes(searchQuery, currentPage, limit));
    }, [currentPage, limit]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(getAllRecipes(searchQuery));
    }

    const handleClick = (recipeId) => {
        navigate(`/detail-recipe/${recipeId}`)
    }

    const totalPage = Math.ceil(totalCount/limit)

    const onNext = () => {
        currentPage < totalPage && setCurrentPage(currentPage + 1)
    }

    const onPrev = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1)
    }

    return (
        <>
        {isLoading ? <Loading /> :
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
                    <Pagination onNext={onNext} onPrev={onPrev} totalPage={totalPage} currentPage={currentPage} />
                </main>
                <Footer/>
            </>
        }
        </>
    )
}