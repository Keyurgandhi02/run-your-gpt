import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "../../config/global";
import { login } from "../../store/authSlice";
import GlobalInput from "../../UI/GlobalInput";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Logindata, setLoginData] = useState({});
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Login Input Change Handler
  const onChangeHandler = (name, value) => {
    setLoginData({ ...Logindata, [name]: value });
  };

  // Login Handler
  const onLoginHandler = () => {
    try {
      if (Logindata?.Email && Logindata?.Password) {
        dispatch(login(Logindata));
        navigate("/");
      } else {
        setError(true);
        setErrorMessage("Email address and Password required!");
      }
    } catch (err) {
      setError(true);
      setErrorMessage(err);
    }
  };

  // Update Body CSS
  useEffect(() => {
    document.body.style.display = "block";
  }, []);

  return (
    <>
      <h1>{APP_NAME}</h1>
      <div className="container">
        <div className="form">
          <form onSubmit={onLoginHandler} className="login-form">
            <GlobalInput
              inputPlaceHolder="Email"
              onChangeHandler={onChangeHandler}
              inputType="text"
            />
            <GlobalInput
              inputPlaceHolder="Password"
              onChangeHandler={onChangeHandler}
              inputType="text"
            />
            <button type="submi" className="btn">
              Login
            </button>
          </form>
          {isError && <p>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;
