import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {

  const dataUser = useSelector((state) => state.auth.user)
  // console.log(dataUser)
  // const navigate = useNavigate()
  const [openSide,setOpenSide] = useState(false)

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="nav-body" >
        <div className="logo">
          <img src="/img/logo.svg" alt="" className='logo-img'/>
          <p>Mama Recipe</p>
        </div>
        {/* nav-link */}
        {!localStorage.getItem('access_token')?
          <div className='link-wrap'>
            <Link className="link-item" to='/regist'>Regist</Link>
            <Link className="link-item" to='/login'>Login</Link>
            <Link className="link-item" to='/search-recipe'>Search Recipe</Link>
          </div>
          :
          <div className='link-wrap'>
            <Link className="link-item" to='/'>Search</Link>
            <Link className="link-item" to='/add-recipe'>Add Recipe</Link>
            <Link className="link-item" to='/detail-profile'>My Recipe</Link>
          </div>}

        {/* profile section */}
        {localStorage.getItem('access_token')?
        <Link to='/edit-profile' className='link-style'>
          <div className="nav-profile">                                 
            <div className="nav-img-circle" style={{backgroundImage: `url(${dataUser?.photo === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : dataUser.photo})`}}></div>                               
            <h5 className='profile-name-navbar'>{dataUser?.username}</h5>               
                {/* <br />
                <Link className='link-style logout' onClick={handleLogout} to='/login' >Logout</Link> */}
  
          </div>
        </Link>   :
          null
        }
        <img src="/img/menu.svg" alt="" className="sidebar-btn" onClick={()=> setOpenSide(!openSide)}/>
      </div>
      {openSide==true &&  
      <div className="side-menu">
        <img src="/img/close.svg" alt="" className="close" onClick={()=> setOpenSide(!openSide)}/>
        <div className="side-link-body">
          <Link className="side-link" to='/'>Home</Link>
          <Link className="side-link" to='/add-recipe'>Add Recipe</Link>
          <Link className="side-link" to='/detail-profile'>My Recipe</Link>
          {localStorage.getItem('access_token') && <Link className="side-link" to='/edit-profile'>Profile</Link>}
          {localStorage.getItem('access_token') && <Link className="side-link logout" onClick={handleLogout} to='/login'>Logout</Link>}
        </div>
      </div>}
    </div>

  );
};

export default Navbar;
