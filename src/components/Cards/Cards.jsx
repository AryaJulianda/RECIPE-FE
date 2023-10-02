import './Cards.css';

const Cards = ({ recipes,onClick}) => {
    return (
        <div id="cards-body">
            {recipes ?
            recipes?.map((recipe) => {
                return (
                    <div className="card-item" key={recipe.recipe_id} onClick={() => {onClick(recipe.recipe_id)}} >
                        <div className="left-card" style={{backgroundImage:`url("${recipe.img}")`}}/>
                        <div className="right-card">  
                            <h5 className="card-title">{recipe.title}</h5>
                            <p className="card-ingredients">Ingredients: <br />{recipe.ingredients}</p>
                            <div className="card-stats">0 Like - 0 Comment - 0 Bookmark</div>
                            <div className="card-author">
                                {/* <div className='author-photo' style={{backgroundImage:`url("${recipe.author_photo}")`}} /> */}
                                <div className='author-photo' style={{backgroundImage:`url("${recipe?.author_photo === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : recipe.author_photo}")`}} />
                                <span className="author-name"> {recipe.author} </span>
                            </div>
                        </div>
                    </div>
                )
            }) : <h1 className='not-found'>Recipe not Found :(</h1>
            }
        </div>
    );
};

export default Cards;

        