import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <>
      <NavLink
        className={s.AuthNav}
        to="/register"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        SigIn
      </NavLink>
      <NavLink
        className={s.AuthNav}
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
