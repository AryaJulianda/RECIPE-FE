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


            {localStorage.getItem('access_token')?
            <div className="profile">                                 
                <div className="img-circle" style={{backgroundImage:`url(${dataUser?.photo === null? './img/default-photo-profile.jpg':dataUser.photo})`}}></div> 
                <span>                                
                  <Link to='/detail-profile' className='link-style profile-name'>{dataUser?.username}</Link>                 
                   <br />
                  <Link className='link-style logout' onClick={handleLogout} to='/login' >Logout</Link>
                </span>
            </div>:
            null
            }
      </div>    
    </nav>
  );
};

export default Navbar;
