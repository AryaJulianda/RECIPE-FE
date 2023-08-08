import React from "react";
import './NavProfile.css';

export default function NavProfile () {
    return (
        <div className="option container-fluid">
            <div className="row">
                <div className="col-7">
                    <nav className="navbar navbar-expand-lg nav-option d-flex justify-content-center">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">Recipes</a>
                            <a className="nav-link" href="#">Bookmarked</a>
                            <a className="nav-link" href="#">Liked</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}