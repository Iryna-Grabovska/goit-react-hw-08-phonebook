import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        SigIn
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        LogIn
      </NavLink>
    </>
  );
}
export { AuthNav };
