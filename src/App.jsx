// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Login from './pages/Auth/Login/Login';
import Regist from './pages/Auth/Regist/Regist';
import SearchRecipe from './pages/SearchRecipe/SearchRecipe';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import DetailProfile from './pages/DetailProfile/DetailProfile';
import DetailRecipe from './pages/DetailRecipe/DetailRecipe';
import AuthChecker from './components/AuthChecker/AuthChecker';
import UserActivation from './components/UserActivation/UserActivation.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/search-recipe' replace={true} /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/regist' element={<Regist />} />
        <Route path='/activate' element={<UserActivation/>} /> 
        <Route path='/search-recipe' element={ <AuthChecker> <SearchRecipe/> </AuthChecker>} />
        <Route path='/detail-profile' element={<DetailProfile/>} />
        <Route path='/add-recipe' element={<AddRecipe/>} />
        <Route path='/edit-recipe/:recipeId' element={<EditRecipe/>} />
        <Route path="/detail-recipe/:recipeId" element={<DetailRecipe />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;

