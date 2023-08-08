import './DataRecipe.css';

const DataRecipe = ({recipe}) => {
    return(
        <div className='data-recipe'>
            <h1 className="title text-center">{recipe.title}</h1>
            <div className="d-flex justify-content-center">
                <div className="recipe-img" style={{backgroundImage:(`url(${recipe.img})`)}}></div>
            </div>
            <div className="ingredients">
                <h5>Ingredients</h5>
                <p>{recipe.ingredients}</p>
            </div>

            <div className="icon">
                <div className="button bookmark"></div>
                <div className="button like"></div>
            </div>

            <div className="comments-area d-flex">
                <div className="comment d-flex">
                <div className="profile detail">
                    <div className="img-circle"></div>
                    <span>Profile Name <br /><span>10 Recipe</span></span>
                </div>
                <span className="comment-text">Wow, I just made this and it was delicious! Thanks for sharing!</span>
                </div>
            </div>

            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="form-comment"></textarea>
            </div>
            <button className="btn-comment btn">Send your comment</button>
        </div>
    )
}

export default DataRecipe;