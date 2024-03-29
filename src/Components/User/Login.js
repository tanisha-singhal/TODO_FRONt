import React from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
function Login() {
  let navigate = useNavigate();
  const responseSuccessGoogle = async (response) => {
    console.log(response);
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_LINK}/api/users/googleLogin`,
      data: { tokenId: response.credential},
    })
      .then((response) => {
        console.log("User Logged In With Google!!", response);
        localStorage.setItem("tokenId", response.data.token);

        navigate("todo");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <div className={classes.btn}>
      <GoogleLogin
        clientId="939470302591-2voul7j4hudfbiqmq9c7uqk9r8p07kal.apps.googleusercontent.com"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
      </div>
    </div>
  );
}

export default Login;
