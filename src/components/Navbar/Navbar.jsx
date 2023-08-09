import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-head navbar navbar-expand">
      <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="">Regist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/search-recipe'>Search Menu</Link>
            </li>
          </ul>


            <div className="profile">
                  <div className="img-circle"></div>
                  <span><Link to='/detail-profile' className='link-style profile-name'>Profile Name</Link><br />
                  <Link className='link-style logout' to='#'>Logout</Link></span>
            </div>
      </div>    
    </nav>
  );
};

export default Navbar;
