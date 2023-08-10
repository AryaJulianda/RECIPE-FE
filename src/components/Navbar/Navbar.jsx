import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('photo');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
  };

  const userName = localStorage.getItem('username');
  const photo = localStorage.getItem('photo');

  return (
    <nav className="nav-head navbar navbar-expand">
      <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="">Regist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/search-recipe'>Search Menu</Link>
            </li>
          </ul>


            <div className="profile">
                  <div className="img-circle" style={{backgroundImage:`url(${photo})`}}></div>
                  <span>
                    <Link to='/detail-profile' className='link-style profile-name'>{userName}</Link><br />
                    <Link className='link-style logout' onClick={handleLogout} to='/login' >Logout</Link>
                  </span>
            </div>
      </div>    
    </nav>
  );
};

export default Navbar;
