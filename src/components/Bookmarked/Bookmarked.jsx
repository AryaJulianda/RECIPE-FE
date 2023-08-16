import React from "react";
import '../Cards/Cards.css';

const Bookmarked = ({ recipes,handleClick}) => {
    // console.log(recipes)
    if(recipes.length==0) {
        return <h1 className="empty">Empty Recipe</h1>
    }

    return (
        <div id="cards">
            {recipes?.map((recipe) => {
                return (
                    <div className="card" key={recipe.recipe_id}>
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
                                    </div> 
                                    <div class="card-btn d-flex justify-content-between">
                                      <button class="btn" id="delete-btn">Delete From Bookmark</button>
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

export default Bookmarked;

