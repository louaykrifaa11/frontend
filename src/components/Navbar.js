import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login")
  }
  return (
    <div className="topnav">
      {isAuth ? (
        <>
          <Link class="active" to="/profile">
            profile
          </Link>
          <a
            onClick={() => {
              handleLogout();
            }}
          >
            logout
          </a>
        </>
      ) : (
        <>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
