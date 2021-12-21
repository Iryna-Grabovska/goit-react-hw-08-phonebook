import { useSelector } from 'react-redux';

export function UserAuth() {
  const { user, token, isLoggedIn } = useSelector(state => state.user);
  return {
    isAuth: !!user,
    token,
    isLoggedIn,
  };
}
