import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import background1 from "./images/styde.png";
import background2 from "./images/teacher.png";

const Avatar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    // const [message, setMessage] = useState('');

    const helloReg = (e) => {
        e.preventDefault(); // stops the default behaviour i.e refresh
        const userData = {
            username, password, address, phone
        }
        axios.post("http://localhost:90/customer/register", userData)
            .then(result => {
                if (result.data.success) {
                    //registered success
                    // setMessage('Registered Successfully')
                    toast.success('register successfully')
                }
                else {
                    // not registered
                    // setMessage('Something went wrong! Please try again!');
                    toast.error('something went wrong! plese try again')
                }
            })
            .catch(e => {
                // setMessage('Something went wrong! Please try again!');


            })
    }

    const login = (e) =>{
        e.preventDefault();
    
    }

    

    return (
    


    <div class="container mb-2">
        
        <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Choose Avatar</span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">2</span>
                <span class="progress-label">Fill Up the Form</span>
            </li>
            
            <li class="step-wizard-item current-item">
                <span class="progress-count">3</span>
                <span class="progress-label">Registration Success</span>
            </li>
        </ul>

        
        <div class="wrapper">
  

  <div class="container">
    <label class="option_item">
      <input type="checkbox" class="checkbox"/>
      <div class="option_inner facebook">
        <div class="tickmark"></div>
        <img className="img-fluid" src={background1}></img>
      </div>
      <div class="name">Student</div>
    </label>
    
    <label class="option_item">
      <input type="checkbox" class="checkbox"/>
      <div class="option_inner instagram">
        <div class="tickmark"></div>
        <img className="img-fluid" src={background2}></img>
      </div>
      <div class="name">Teacher</div>
    </label>  
  </div>
  <a href="/register">
        <button class="btn3">Next<span class="arrow">&#8594;</span></button>
  </a>
</div>
    
    </section>

    </div>
             

            
            
    )
}

export default Avatar;