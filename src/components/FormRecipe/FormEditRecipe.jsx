import React,{useState} from "react";
import './FormRecipe.css';

const FormEditRecipe = ({inputRecipe,onChange,onSubmit,handleChangeImage,setCategoryId,categoryId,showImage}) => {
    return (
        <div className="form-add-recipe">
            <div className="add-image d-flex">
                <img src={showImage} alt="" />
                <label htmlFor="file-upload" className="label-file-upload">Change Image</label>
                <input type="file" id="file-upload" onChange={(e) => handleChangeImage(e)}/>
            </div>
        
            <input type="text" className="form-control" id="title-form" placeholder="Title" name='title' value={inputRecipe.title} onChange={onChange} />

            <textarea className="form-control" id="form-ingredients" placeholder="Ingredients" name="ingredients" value={inputRecipe.ingredients} onChange={onChange} ></textarea>

            <select className="form-control" id="form-category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>;
                <option value="">Select Category</option>
                <option value="1">Main Course</option>
                <option value="2">Appetizer</option>
                <option value="3">Dessert</option>
            </select> 

            <button type="button" className="btn" id="btn-add-recipe" onClick={onSubmit} >Post</button>
        </div>

    );
};

export default FormEditRecipe;