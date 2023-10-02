import './NavProfile.css';

export default function NavProfile ({activeComponent,setActiveComponent}) {
    return (
        <div className="navbar-wrapper">
            <p className={activeComponent=='myRecipes'? "navbar-link navbar-link-active" : "navbar-link navbar-link-disactive"} onClick={() => setActiveComponent('myRecipes')}>My Recipes</p>
            <p className={activeComponent=='bookmarked'? "navbar-link navbar-link-active" : "navbar-link navbar-link-disactive"} onClick={() => setActiveComponent('bookmarked')}>Bookmarked</p>
            <p className={activeComponent=='liked'? "navbar-link navbar-link-active" : "navbar-link navbar-link-disactive"} onClick={() => setActiveComponent('liked')}>Liked</p>
        </div>
    )
}