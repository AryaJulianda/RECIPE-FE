import React from "react";
import './Cards.css';

const Cards = ({ recipes,onClick}) => {
    return (
        <div id="cards">
            {recipes?.map((recipe) => {
                return (
                    <div className="card" key={recipe.recipe_id} onClick={() => {onClick(recipe.recipe_id)}} >
                        <div className="row g-0">
                            <div className="col img-card">
                                <img src={recipe.img} className="img-fluid rounded-start" alt={recipe.title} />
                            </div>
                            <div className="col">
                                <div className="card-body d-flex flex-column align-items-start justify-content-center">
                                    <div>       
                                        <h5 className="card-title">{recipe.title}</h5>
                                        <p className="card-text">Ingredients: <br />{recipe.ingredients}</p>
                                    </div>
                                    <div className="card-stats ">
                                        <div className="stats fw-medium"><span>0 Like - 0 Comment - 0 Bookmark</span></div>
                                        <div className="author d-flex justify-content-start align-items-center">
                                            <img src="../../../img/Ellipse 128.jpg" alt="" height="68px" width="68px" />
                                            <span className="fw-medium"> {recipe.author} </span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
              
                )
            })}
        </div>
    );
};

export default Cards;

        