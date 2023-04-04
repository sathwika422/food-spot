import "./login.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser , faLock} from '@fortawesome/fontawesome-free-solid'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [username , setusername] = useState('');
  const [password, setpassword] = useState('');

  const usernamehandler = (e) => {
    setusername(e.target.value);
  }

  const passwordhandler = (e) => {
    setpassword(e.target.value);
  }

  const onSubmitHandler = (e) =>{
    console.log("form data================  ",e);
    if(username === "" ||
     password === ""){
      alert("please Fill all the fields");
      e.preventDefault();
    }
    else{
      navigate("/");
    }
    setpassword("mmmmmmm");
    console.log("on submit worked");
  }
  return (
    <div class="login-page-wrapper">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h3 className="login-form-title">Login</h3>
        <div className="form-main-content">
          <label for="fname" className="login-form-label">
            Username
          </label>
          <div className="input-box">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            id="fname"
            name="fname"
            value={username}
            placeholder="Type your username"
            className="login-form-inputs"
            onChange={usernamehandler}
          />
          </div>
          
          <label for="lname" className="login-form-label">
            Password
          </label>
          <div className="input-box">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            id="fname"
            name="fname"
            value={password}
            placeholder="Type your password"
            className="login-form-inputs"
            onChange={passwordhandler}
          />
          </div>
          <button className="forgot-password-button">forgot password?</button>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
