import React from "react";
import { useRef } from "react";
import { UserLogin } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.user);


  const handleLogin = async () => {
    await dispatch(
      UserLogin({
        email: email.current.value,
        password: password.current.value,
      })
    )

    if(!error){
      navigate("/profile")
    }
  };

  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="form">
        <h3>Login Here</h3>

        <label for="email">Email</label>
        <input type="email" placeholder="type your email" ref={email}></input>

        <label for="password">password</label>
        <input
          type="password"
          placeholder="type your password"
          ref={password}
        ></input>

        <button
          onClick={() => {
            handleLogin()
          }}
        >
          login
        </button>
        {error && <h3> {error} </h3>}
        {loading && <h3> loading ... </h3>}
      </div>
    </div>
  );
};

export default Login;
