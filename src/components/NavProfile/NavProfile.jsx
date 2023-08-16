import React from "react";
import './NavProfile.css';

export default function NavProfile ({setActiveComponent}) {
    return (
        <div className="option container-fluid">
            <div className="row">
                <div className="col-7">
                    <nav className="navbar navbar-expand-lg nav-option d-flex justify-content-center">
                        <div className="navbar-nav">
                            <a className="nav-link active" onClick={() => setActiveComponent('recipes')}>Recipes</a>
                            <a className="nav-link" onClick={() => setActiveComponent('bookmarked')}>Bookmarked</a>
                            <a className="nav-link" href="#">Liked</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}