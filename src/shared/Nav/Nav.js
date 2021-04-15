import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Prima Aplicatie de React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter">
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>

            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// export function Nav() {
//   return (

//     <nav>
//       <ul className={styles['main-menu']}>
//         <li>
//           <NavLink activeClassName={styles.active} exact to="/">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName={styles.active} to="/counter">
//             Counter
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName={styles.active} to="/movies">
//             Movies
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
