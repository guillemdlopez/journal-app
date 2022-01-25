import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegister } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import useForm from "../../hooks/useForm";

const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({
    name: "Guillem",
    email: "guillemdelas@hotmail.com",
    password: "123456",
    password2: "123456",
  });

  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  console.log(msgError);

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);

    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Password should be at list 6 characters and match"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth_input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth_input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth_input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm"
          name="password2"
          className="auth_input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
