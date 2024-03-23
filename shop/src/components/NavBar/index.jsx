import { Link } from 'react-router-dom';

function NavBar() {
  return (
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
  );
}

export default NavBar;
