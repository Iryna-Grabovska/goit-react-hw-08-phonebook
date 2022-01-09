import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation.js';
import { AuthNav } from 'components/AuthNav/AuthNav.js';
import Button from 'components/Button';
import { useLogOutMutation } from 'store/authApi';
import { removeUser } from 'store/userSlice';
import { useDispatch } from 'react-redux';

function AppBar() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [logOutUser] = useLogOutMutation();
  const dispatch = useDispatch();

  const btnLogOut = () => {
    console.log(9);
    logOutUser();
    dispatch(removeUser());
  };
  return (
    <>
      <Navigation />
      {isLoggedIn ? (
        <Button label="LogOut" type="button" onClick={btnLogOut} />
      ) : (
        <AuthNav />
      )}
    </>
  );
}
export { AppBar };
