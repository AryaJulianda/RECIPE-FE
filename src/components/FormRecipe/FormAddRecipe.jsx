import React from "react";
import './FormRecipe.css';

const FormAddRecipe = ({recipe,onChange,onSubmit,recipeImage,handleChangeImage,setCategoryId}) => {
    return (
        <div className="form-add-recipe">
             <div className="add-image d-flex">
                <img src={recipeImage.show} alt="" />
                <label htmlFor="file-upload" className="label-file-upload">Add Image</label>
                <input type="file" id="file-upload" onChange={(e) => handleChangeImage(e)}/>
            </div>
        
            <input type="text" className="form-control" id="title-form" placeholder="Title" name='title' value={recipe.title} onChange={onChange} />

            <textarea className="form-control" id="form-ingredients" placeholder="Ingredients" name="ingredients" value={recipe.ingredients} onChange={onChange} ></textarea>

            {/* <input type="text" className="form-control" id="form-category" placeholder="Category" onChange={onChange} /> */}
            <select className="form-control" id="form-category" onChange={(e) => setCategoryId(e.target.value)}>;
                <option value="">Select Category</option>
                <option value="1">Main Course</option>
                <option value="2">Appetizer</option>
                <option value="3">Dessert</option>
            </select>   

            <button type="button" className="btn" id="btn-add-recipe" onClick={onSubmit} >Post</button>
        </div>
    );
};

export default FormAddRecipe;