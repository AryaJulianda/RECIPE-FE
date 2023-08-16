import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const dataUser = useSelector((state) => state.auth.user)
  // console.log(dataUser)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="nav-head navbar navbar-expand">
      <div className="container-fluid">
          {!localStorage.getItem('access_token')?
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/regist'>Regist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/search-recipe'>Search Menu</Link>
              </li>
            </ul> 
              :
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/add-recipe'>Add Recipe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/detail-profile'>Profile</Link>
              </li>
            </ul>
          }

            {localStorage.getItem('access_token')?
              <div className="profile">                                 
                  <div className="img-circle" style={{
  backgroundImage: `url(${dataUser?.photo === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : dataUser.photo})`}}></div> 
                  <span>                                
                    <Link to='/edit-profile' className='link-style profile-name'>{dataUser?.username}</Link>                 
                    <br />
                    <Link className='link-style logout' onClick={handleLogout} to='/login' >Logout</Link>
                  </span>
              </div> :
              null
            }
      </div>    
    </nav>
  //   <nav className="nav-head navbar navbar-expand-lg">
  //   <div className="container-fluid">
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //     <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       {!localStorage.getItem('access_token') ? (
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/regist">
  //               Regist
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/login">
  //               Login
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/search-recipe">
  //               Search Menu
  //             </Link>
  //           </li>
  //         </ul>
  //       ) : (
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/">
  //               Home
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/add-recipe">
  //               Add Recipe
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/detail-profile">
  //               Profile
  //             </Link>
  //           </li>
  //         </ul>
  //       )}

  //       {localStorage.getItem('access_token') ? (
  //         <div className="profile">
  //           <div
  //             className="img-circle"
  //             style={{
  //               backgroundImage: `url(${
  //                 dataUser?.photo === null
  //                   ? './default-photo-profile.jpg'
  //                   : dataUser.photo
  //               })`,
  //             }}
  //           ></div>
  //           <span>
  //             <Link
  //               to="/detail-profile"
  //               className="link-style profile-name"
  //             >
  //               {dataUser?.username}
  //             </Link>
  //             <br />
  //             <Link
  //               className="link-style logout"
  //               onClick={handleLogout}
  //               to="/login"
  //             >
  //               Logout
  //             </Link>
  //           </span>
  //         </div>
  //       ) : null}
  //     </div>
  // </div>
  //   </nav>

  );
};

export default Navbar;
