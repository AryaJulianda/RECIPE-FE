import './DataRecipe.css';
const DataRecipe = ({recipe}) => {
    const ingredients = recipe?.ingredients?.split(',')
    return(
        <div className="data-recipe">
            <div className='upside'>
                <div className="recipe-img" style={{backgroundImage:(`url(${recipe.img})`)}}>
                    <div className='gradient'> 
                        <h1 className="recipe-title">{recipe.title}</h1>
                    </div>
                </div>
                <div className='recipe-info'>
                    <h1 className="recipe-title">{recipe.title}</h1>
                    <div className="recipe-ingredients">
                        <h5 className='ingredients-title'>Ingredients</h5>
                        {ingredients?.map((item)=> {
                            return (
                                <p className='ingredients-detail'>• {item}</p>
                            )
                        })}  
                    </div>
                </div>
            </div>
            <div className="identity">
                <div className="author">
                    <div className="author-photo" style={{backgroundImage:(`url(${recipe.author_photo})`)}}/>
                    <p className="author-name">{recipe.author}</p>
                </div>
                <div className="icon">
                    <img className="button bookmark" src='/img/bookmark.svg'/>
                    <img className="button like" src='/img/like2.svg' />
                </div>
            </div>


            <div className="comments-area">
                <h1 className='comment-head'>Comments</h1>
                <div className="comment">
                    <div className="commentor">
                        <img className="commentor-photo" src='/img/default-photo-profile.jpg'/>
                        <p className='commentor-name'>Profile Name</p>
                    </div>
                    <p className="comment-message">Wow, I just made this and it was delicious! Thanks for sharing!</p>
                </div>
                <div className="comment">
                    <div className="commentor">
                        <img className="commentor-photo" src='/img/default-photo-profile.jpg'/>
                        <p className='commentor-name'>Profile Name</p>
                    </div>
                    <p className="comment-message">Wow, I just made this and it was delicious! Thanks for sharing!</p>
                </div>
                <div className="comment">
                    <div className="commentor">
                        <img className="commentor-photo" src='/img/default-photo-profile.jpg'/>
                        <p className='commentor-name'>Profile Name</p>
                    </div>
                    <p className="comment-message">Wow, I just made this and it was delicious! Thanks for sharing!</p>
                </div>
            </div>
            <div className="send-comment">
                <textarea className="comment-field" placeholder="Leave a comment here"></textarea>
            <button className="btn-comment">Send your comment</button>
            </div>
        </div>
        // <div className='data-recipe'>
        //     <h1 className="title text-center">{recipe.title}</h1>
        //     <div className="d-flex justify-content-center">
        //         <div className="recipe-img" style={{backgroundImage:(`url(${recipe.img})`)}}></div>
        //     </div>
            // <div className="ingredients">
            //     <h5>Ingredients</h5>
            //     <p>{recipe.ingredients}</p>
            // </div>






        // </div>
    )
}

export default DataRecipe;