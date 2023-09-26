import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'
const Navbar = () => {

  const dataUser = useSelector((state) => state.auth.user)
  // console.log(dataUser)
  // const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="nav-body" >

      {/* nav-link */}
      {!localStorage.getItem('access_token')?
        <div className='link-wrap'>
          <Link className="link-item" to='/regist'>Regist</Link>
          <Link className="link-item" to='/login'>Login</Link>
          <Link className="link-item" to='/search-recipe'>Search Menu</Link>
        </div>
        :
        <div className='link-wrap'>
          <Link className="link-item" to='/'>Home</Link>
          <Link className="link-item" to='/add-recipe'>Add Recipe</Link>
          <Link className="link-item" to='/detail-profile'>Profile</Link>
        </div>}

      {/* profile section */}
      {localStorage.getItem('access_token')?
        <div className="nav-profile">                                 
            <div className="nav-img-circle" style={{backgroundImage: `url(${dataUser?.photo === null ? 'https://res.cloudinary.com/dgwlgaxtm/image/upload/v1692137796/qszxjbs1rkjigjcrdqs1.jpg' : dataUser.photo})`}}></div> 
            <span>                                
              <Link to='/edit-profile' className='link-style nav-profile-name'>{dataUser?.username}</Link>                 
              <br />
              <Link className='link-style logout' onClick={handleLogout} to='/login' >Logout</Link>
            </span>
        </div> :
        null
      }
    </div>

  );
};

export default Navbar;
