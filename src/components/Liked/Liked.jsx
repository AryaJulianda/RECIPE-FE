import '../Cards/Cards.css';

const Liked = ({ recipes}) => {
    // console.log(recipes)
    return (
        <div id="cards-body">
            <h1 className="empty">Empty Recipe</h1>
        </div>
    );
};

export default Liked;

// <div className="card" key={recipe.recipe_id}>
//     <div className="row g-0">
//         <div className="col img-card">
//             <img src={recipe.img} className="img-fluid rounded-start" alt={recipe.title} />
//         </div>
//         <div className="col">
//             <div className="card-body d-flex flex-column align-items-start justify-content-center">
//                 <div>       
//                     <h5 className="card-title">{recipe.title}</h5>
//                     <p className="card-text">Ingredients: <br />{recipe.ingredients}</p>
//                 </div>
//                 <div className="card-stats ">
//                     <div className="stats fw-medium"><span>0 Like - 0 Comment - 0 Bookmark</span></div>
//                 </div> 
//                 <div className="card-btn d-flex justify-content-between">
//                   <button className="btn" id="delete-btn">Delete From Bookmark</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>