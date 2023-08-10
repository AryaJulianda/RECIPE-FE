import React,{useState,useEffect} from "react";
import { useParams,Link, useNavigate} from 'react-router-dom';
// import { Modal } from 'react-bootstrap';

import Navbar from "../../components/Navbar/Navbar";
import InfoProfile from '../../components/InfoProfile/InfoProfile';
import NavProfile from '../../components/NavProfile/NavProfile';
import Recipes from '../../components/Recipes/Recipes';
import Pagination from "../../components/Pagination/Pagination";
import Footer from '../../components/Footer/Footer';
import ModalComponent from '../../components/Modal/Modal'

import axios from 'axios';

export default function DetailProfile () {

    const serverUrl = import.meta.env.VITE_SERVER_URL;
    const token = localStorage.getItem('access_token');

    const [recipes,setRecipes] = useState([]);
    const navigate = useNavigate();

    const userId = localStorage.getItem('user_id');

    const [showModal,setShowModal]= useState(false);
    const [modalMessage, setModalMessage] = useState({});

    const getAllRecipe = async () => {
        await axios.get(`${serverUrl}/recipe/my_recipe/` + userId)
            .then(res => { 
                console.log('Get Data successfully',res.data);
                setRecipes(res.data);
            })
            .catch(err => {
                console.log('Get data failed',err.response.data.message)
            })
    }

    useEffect(()=> {
        getAllRecipe();
        // console.log('Get all data success:',recipes);
    },[])

    const handleDelete = (recipe_id) => {
         axios.delete(`${serverUrl}/recipe/${recipe_id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(res => {
                setModalMessage({header:'Delete recipe successfuly'})
                getAllRecipe();
                handleShowModal();
                //console.log('Delete data successfully',res.data.data);
            })
            .catch(error => {
                setModalMessage({header:'Delete recipe failed'});
                console.log(error)
                handleShowModal();
                // console.error("Gagal menghapus data:", error.response.data.error);
            });
    };

    const handleEdit = (recipeId) => {
        // console.log(`/edit-recipe/${recipeId}`);
        navigate(`/edit-recipe/${recipeId}`);
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
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


