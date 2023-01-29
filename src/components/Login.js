import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import background from "./images/loginnn.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    axios
      .post("http://localhost:90/customer/login", userData)
      .then((result) => {
        if (result.data.token) {
          localStorage.clear();
          localStorage.setItem("username", result.data.username);

          if (result.data.username === "admin") {
            /// success
            localStorage.setItem("t", result.data.token);
            localStorage.setItem("admin", true);
            // setMessage("login success");
            toast.success("as admin");
            window.location.replace("/Adminhome");

            // window.location.href="/"
          } else {
            localStorage.setItem("t", result.data.token);
            // invalid
            // setMessage("Invalid Login Please try again!!")
            toast.success("as user");
            window.location.replace("/Loginhome");
          }
        } else {
          toast.error("credentials doesn't match");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div class="loggg">
      <div class="container sign-cc">
        <input type="checkbox" id="flip" />
        <div class="cover">
          <div class="front">
            <img src={background} alt="" />
          </div>
          <div class="back">
            <img class="backImg" src={background} alt="" />
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Username here"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Password here"
                      value={password}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div class="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Sumbit" onClick={userLogin} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
