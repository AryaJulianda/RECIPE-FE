import React from "react";
import './InfoProfile.css';

export default function InfoProfile({user}) {
    // const createdAt = user.created_at.slice(0, 10);
    // console.log(user)
    return (
        <header className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-3">
                    <div className="profile detail">
                        <div className="img-circle"  style={{
  backgroundImage: `url(${user?.photo === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : user.photo})`
}}></div>
                        <span>{user.username}<br /><span>10 Recipe</span></span>
                    </div>            
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className="date">
                        {/* <h5 className="fw-medium">{createdAt}</h5> */}
                    </div>
                </div>
            </div>
         </header> 
    )
}