import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setUser } from 'store/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from 'store/authApi';

function LoginPage(params) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, { data, error }] = useLogInMutation();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setUser(data));
    }
    // eslint-disable-next-line
  }, [data, error]);

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(setUser());
    // dispatch(setUser());
    logIn({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">log in</button>
      </form>
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
export default LoginPage;
