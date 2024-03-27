import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <div className='page-navbar'>
      <nav>
        <div>
          <ul>
            <li>
              <Link to='/'>Home page</Link>
            </li>
            <li>
              <Link to='/todos'>Todos page</Link>
            </li>
            <li>
              <Link to='/counter'>Counter page</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
