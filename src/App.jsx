// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import SearchRecipe from './pages/SearchRecipe/SearchRecipe';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import DetailProfile from './pages/DetailProfile/DetailProfile';
import DetailRecipe from './pages/DetailRecipe/DetailRecipe';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/search-recipe' replace={true} /> } />
        <Route path='/search-recipe' element={<SearchRecipe/>} />
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

