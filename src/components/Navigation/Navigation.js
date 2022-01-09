import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Navigation(params) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? 'blue' : 'black',
          })}
        >
          Contacts
        </NavLink>
      ) : (
        <p></p>
        // <NavLink
        //   to="/"
        //   style={({ isActive }) => ({
        //     color: isActive ? 'blue' : 'black',
        //   })}
        // >
        //   LogIn
        // </NavLink>
      )}
    </nav>
  );
}
export { Navigation };
