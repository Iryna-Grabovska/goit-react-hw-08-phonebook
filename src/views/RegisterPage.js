import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from 'store/userSlice.js';
import { useRegisterMutation } from 'store/authApi';
function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser, { data, error }] = useRegisterMutation();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    registerUser({ name, email, password });
    // dispatch(setUser());
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
          Pass
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> sign in</button>
      </form>
      Already have er account
      <Link to="/login">log in</Link>
    </div>
  );
}
export default RegisterPage;
