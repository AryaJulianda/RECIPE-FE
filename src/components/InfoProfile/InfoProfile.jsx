import React from "react";
import './InfoProfile.css';

export default function InfoProfile() {
    return (
        <header className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-3">
                    <div className="profile detail">
                        <div className="img-circle"></div>
                        <span>Profile Name<br /><span>10 Recipe</span></span>
                    </div>            
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className="date">
                        <h5 className="fw-medium">11 Juli 2004</h5>
                    </div>
                </div>
            </div>
         </header> 
    )
}