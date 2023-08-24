import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_NAME, user_image, user_local_auth } from "../../../config/global";
import { logout } from "../../../store/authSlice";

function SideBarHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // User Details from local storage
  const userDetails = JSON.parse(localStorage.getItem(user_local_auth));

  // Logout Handler
  const logOutHandler = () => {
    const confirmBox = window.confirm("Do you really want to Log Out!!");
    if (confirmBox === true) {
      dispatch(logout());
      navigate("/login");
    }
  };
  return (
    <>
      <div className="app-left-header">
        <h1>{APP_NAME}</h1>
      </div>
      <div className="app-profile-box">
        <img src={user_image} alt="profile" />
        <div className="app-profile-box-name">{userDetails?.user?.Email}</div>
        <p onClick={logOutHandler} style={{ cursor: "pointer" }}>
          Log Out
        </p>
      </div>
    </>
  );
}

export default SideBarHeader;
