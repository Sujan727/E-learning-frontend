import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import background from "./images/hello.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const helloReg = (e) => {
    e.preventDefault(); // stops the default behaviour i.e refresh
    const userData = {
      username,
      password,
      address,
      phone,
    };
    axios
      .post("http://localhost:90/customer/register", userData)
      .then((result) => {
        if (result.data.success) {
          toast.success("register successfully");
          window.location.replace("/Registrationsuccess");
        } else {
          toast.error("invalid");
        }
      })
      .catch((e) => {
      });
  };

  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div class="container mb-2">
      <section class="step-wizard">
        <ul class="step-wizard-list">
          <li class="step-wizard-item current-item">
            <span class="progress-count">1</span>
            <span class="progress-label">Choose Avatar</span>
          </li>
          <li class="step-wizard-item">
            <span class="progress-count">2</span>
            <span class="progress-label">Fill Up the Form</span>
          </li>

          <li class="step-wizard-item current-item">
            <span class="progress-count">3</span>
            <span class="progress-label">Registration Success</span>
          </li>
        </ul>
        <div class="wrapper">
          <div class="container sign-cc">
            <input type="checkbox" id="flip" />
            <div class="cover">
              <div class="front">
                <img src={background} alt="" />
              </div>
            </div>
            <div class="forms">
              <div class="form-content">
                <div class="signup-form">
                  <div class="title">Signup</div>
                  <form action="#">
                    <div class="input-boxes">
                      <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="Enter your username"
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
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-phone"></i>
                        <input
                          type="text"
                          placeholder="Phone no"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-home"></i>
                        <input
                          type="text"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>

                      <div class="button input-box">
                        <input
                          type="submit"
                          value="Sumbit"
                          onClick={helloReg}
                        />
                      </div>
                      <div class="text sign-up-text">
                        Already an user? <a href="/login">Login now</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
