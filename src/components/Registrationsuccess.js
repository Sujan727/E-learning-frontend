import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Registrationsuccess = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
 
  const helloReg = (e) => {
    e.preventDefault(); 
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
        } else {
          toast.error("something went wrong! plese try again");
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
          <li class="step-wizard-item current-item">
            <span class="progress-count">2</span>
            <span class="progress-label">Fill Up the Form</span>
          </li>

          <li class="step-wizard-item">
            <span class="progress-count">3</span>
            <span class="progress-label">Registration Success</span>
          </li>
        </ul>
        <div class="wrapper">
          <div class="ScriptTop">
            <div class="rt-container">
              <div class="col-rt-4" id="float-right"></div>
            </div>
          </div>

          <section>
            <div class="rt-container">
              <div class="col-rt-12">
                <div class="Scriptcontent">
                  <div id="card" class="animated fadeIn">
                    <div id="upper-side">
                      <h3 id="status">Success</h3>
                    </div>
                    <div id="lower-side">
                      <p id="message">
                        Congratulations, your account has been successfully
                        created.
                      </p>
                      <a href="/login" id="contBtn">
                        Continue
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Registrationsuccess;
