import { connect } from "react-redux";
import {register} from '../store/action/user';
import React from 'react';
import { useState } from "react";
import './Register.css';
import {Redirect,useHistory} from 'react-router-dom';


const Register = (props) => {
const history=useHistory();
const [userName,setuserName]=useState(null);
const [city,setcity]=useState(null);
const [street,setstreet]=useState(null);
const [mail,setmail]=useState(null);
const [phone,setphone]=useState(null);
const [validForm,setvalidForm]=useState(false);
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const checkForm=()=>{
  if( userName!=null || userName!="" &&
  city!=null || city!="" &&
  street!=null || street!="" &&
  mail!=null || mail!="" && reg.test(mail)==true &&
  phone!="" || phone!=null && phone.length==10
  )
  setvalidForm(true);
  console.log(validForm);
}
const toLogin=()=>{

  history.push("/login");
}

const changeUserName=(e)=>{
  console.log(userName);
setuserName(e.target.value);
 
checkForm();
}
const changeCity=(e)=>{
  setcity(e.target.value);
  console.log(city);
checkForm();
}
const changeStreet=(e)=>{
setstreet(e.target.value);
checkForm();
}
const changeMail=(e)=>{
  setmail(e.target.value); 
   console.log(e.target.value);
checkForm();
}


const changePhone=(e)=>{
    setphone(e.target.value);
    checkForm();
    }
    return ( <>
    
     

       
       <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="user name" name="userName"   onChange={changeUserName}/>
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="city" name="city"   onChange={changeCity}/>
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="street" name="street"   onChange={changeStreet}/>
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
            <input type="text" placeholder="mail" name="mail"   onChange={changeMail}/>
             </div>
            {mail!=null && mail!="" && reg.test(mail) === false && <div>*Invalid email</div>} 
            <div class="input-field">
              <i class="fas fa-lock"></i>
             <input type="number" placeholder="phone" name="phone"   onChange={changePhone}/>
            </div>
            {phone!=null && phone!="" && phone.length<10  && <div>*Invalid phone</div>}
           

            {/* <input type="submit" value="Login" class="btn solid" /> */}
            <input type="button"  value="Sign up" class="btn solid" onClick={()=>{
              if(validForm) props.register({userName:userName,adress:{city:city,street:street},email:mail,phone:phone})}}/>
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
              
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" /> 
            
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Already registered?
</h3>
            <p>
             The entrance is from here
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={toLogin}>
              Login
            </button>
          </div>
          {/* <img src="img/log.svg" class="image" alt="" /> */}
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          {/* <img src="img/register.svg" class="image" alt="" /> */}
        </div>
      </div>
    </div>
    </>
     );
}
 
export default connect(null,{register})(Register) ;