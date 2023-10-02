import '../Cards/Cards.css';

const MyRecipes = ({ recipes,handleDelete,handleEdit,handleClick}) => {
    // console.log(recipes)
    return (
        <div id="cards-body">
                
            {recipes.length==0 ?
                <h1 className="empty">Empty Recipe</h1>
            :(recipes?.map((recipe) => {
                    return (
                        <div className="card-item" key={recipe.recipe_id} >
                            <div className="left-card" style={{backgroundImage:`url("${recipe.img}")`}}/>
                            <div className="right-card">  
                                <h5 className="card-title" onClick={() => {handleClick(recipe.recipe_id)}}>{recipe.title}</h5>
                                <p className="card-ingredients">Ingredients: <br />{recipe.ingredients}</p>
                                <div className="card-stats">0 Like - 0 Comment - 0 Bookmark</div>
                                <div className="card-button">
                                    <button className="button edit-btn" onClick={() => handleEdit(recipe.recipe_id)}>Edit Menu</button>
                                    <button className="button delete-btn" onClick={() => handleDelete(recipe.recipe_id)}>Delete Menu</button>
                                </div>
                            </div>
                        </div>
                    )
                }))}
        </div>
    );
};

export default MyRecipes;

