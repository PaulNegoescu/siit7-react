import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalMessage } from '../shared/GlobalMessage';
import { useAuthContext } from './AuthContext';

export function Auth() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    retypePassword: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    retypePassword: '',
  });
  const [globalMessage, setGlobalMessage] = useState('');
  //   const { token, setToken } = useContext(AuthContext)
  const { setToken, setUser } = useAuthContext();

  const location = useLocation();
  const isRegister = location.pathname.includes('register');

  const title = isRegister ? 'Register' : 'Login';
  const alternateLink = {
    Login: (
      <span>
        Don't have an account? <Link to="/register">Register here.</Link>
      </span>
    ),
    Register: (
      <span>
        Already have an account? <Link to="/login">Login instead.</Link>
      </span>
    ),
  };

  function handleInputChange(e) {
    // const newValues = { ...values };
    // newValues[e.target.id] = e.target.value;
    // setValues(newValues);

    // Setam pe state valoare inputputului
    // setUsername(e.target.value);
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });

    // Anulam erorile de validare pentru field-ul curent in momentul in care se scrie ceva in el
    setErrors({ ...errors, [e.target.id]: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // cum luam din formular valorile???
    // const onlyUsefulParams = {...values};
    // delete onlyUsefulParams.retypePassword;

    if (isFormValid() === false) {
      return;
    }

    const { retypePassword, ...onlyUsefulParams } = values;

    // const data = new URLSearchParams(onlyUsefulParams);

    const res = await fetch(
      `https://movies-app-siit.herokuapp.com/auth/${
        isRegister ? 'register' : 'login'
      }`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(onlyUsefulParams),
      }
    ).then((res) => res.json());

    //{message: "User not found"}
    //{message: "Username already existing"}
    if (res.message) {
      setGlobalMessage(res.message);
      return;
    }

    //{authenticated: true, accessToken: "KGl9Or9GDZ0IO-MsSlm9FzHDIrdhE73F"}
    if (res.authenticated) {
      setToken(res.accessToken);
      setUser(values.username);
    }
  }

  function isFormValid() {
    let isValid = true;
    const newErrors = { ...errors };

    if (values.username.length === 0) {
      newErrors.username = 'Username is required.';
      isValid = false;
    }

    // if (
    //   /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    //     values.password
    //   ) === false
    // ) {
    //   newErrors.password = 'Password needs to be more complex.';
    //   isValid = false;
    // }

    if (isRegister && values.retypePassword !== values.password) {
      newErrors.retypePassword = 'The passwords need to be the same.';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  }

  function handleGlobalMessageDismiss() {
    setGlobalMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={`form-control${
            errors.username !== '' ? ' is-invalid' : ''
          }`}
          id="username"
          onChange={handleInputChange}
          value={values.username}
          placeholder="Username"
        />
        <div className="invalid-feedback">{errors.username}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={`form-control${
            errors.password !== '' ? ' is-invalid' : ''
          }`}
          id="password"
          onChange={handleInputChange}
          value={values.password}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </div>
      {isRegister ? (
        <div className="mb-3">
          <label htmlFor="retypePassword" className="form-label">
            Retype Password
          </label>
          <input
            type="password"
            className={`form-control${
              errors.retypePassword !== '' ? ' is-invalid' : ''
            }`}
            id="retypePassword"
            onChange={handleInputChange}
            value={values.retypePassword}
          />
          <div className="invalid-feedback">{errors.retypePassword}</div>
        </div>
      ) : null}
      <button type="submit" className="btn btn-primary me-3">
        {title}
      </button>
      {alternateLink[title]}

      <GlobalMessage
        type="error"
        title="An error ocurred"
        message={globalMessage}
        onDismiss={handleGlobalMessageDismiss}
      />
    </form>
  );
}
