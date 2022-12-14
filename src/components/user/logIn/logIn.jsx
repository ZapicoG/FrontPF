import { Icon } from "@iconify/react";
import { AlternateEmail } from "@mui/icons-material";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { offlineToOnlineCart } from "../../../Controllers/Cart";
import { updateUserState } from "../../../redux/action";
import AuthService from "../../../services/auth.service";
import "./logIn.css";
import { BACK_URL } from "../../../constantes";

const LogIn = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.open(`${BACK_URL}/auth/google`, "_self");
  };

  const handleLogin = async (e) => {
    if (userName && password) {
      e.preventDefault();
      try {
        await AuthService.login(userName, password).then(
          (response) => {
            navigate("/home");
            console.log(response);
            dispatch(
              updateUserState({
                userName: response.userName,
                role: response.privileges,
                defaultShippingAddress: response.defaultShippingAddress,
                logged: true,
              })
            );
            offlineToOnlineCart(userName);
          },
          (error) => {
            toast("Usuario o contraseña incorrectos");
          }
        );
      } catch (err) {}
    }
  };
  return (
    <div className="login_body">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="center">
        <Link to={"/"} className="link_box">
          <button className="tooltip button_box">
            <Icon icon="akar-icons:arrow-back-thick-fill" />
          </button>
        </Link>
        <h1>Ingresar con mi cuenta</h1>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="inputbox">
            <input
              type="text"
              required="required"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <span>Usuario</span>
          </div>
          <div className="inputbox">
            <input
              type="password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Constraseña</span>
          </div>
          <div className="boton">
            <div className="inputbox">
              <input onClick={handleLogin} type="button" value="Ingresar" />
            </div>
            <Link className="signin_box" to={"/home/sign-in"}>
              Crear una cuenta
            </Link>
          </div>
          <div className="boton">
            <div className="inputbox">
              <input onClick={handleGoogleLogin} type="button" value="Google" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
