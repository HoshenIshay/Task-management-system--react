import { connect } from "react-redux";
import {logUser} from '../store/action';
import React from 'react';
import { useState } from "react";
import './Login.css';
import { Redirect,useHistory } from "react-router-dom";
// import {ToDos} from './ToDos';



const Login = (props) => {
    const [mail,setmail]=useState(null);
const [password,setpassword]=useState(null);



const history = useHistory();
const toRegister=()=>{
  history.push("/register");
}
const changeMail=(e)=>{
    console.log(e.target.value);
setmail(e.target.value);
}

const changePassword=(e)=>{
    setpassword(e.target.value);
    }
   
    return ( <>
    
      {/* <input type="email" placeholder="mail" name="mail"   onKeyPress={changeMail}/> 
     <input type="password" placeholder="password" name="password"   onKeyPress={changePassword}/>
       <input type="button" onClick={()=>{props.logUser({id:password,email:mail})}}/>  */}

       
       <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              {/* <input type="text" placeholder="Username" /> */}
              <input type="text" placeholder="mail" name="mail"   onChange={changeMail}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              {/* <input type="password" placeholder="Password" /> */}
              <input type="password" placeholder="password" name="password"   onChange={changePassword}/>
            </div>
            {/* <input type="submit" value="Login" class="btn solid" /> */}
            <input type="button"  value="Login" class="btn solid" onClick={()=>{props.logUser({id:parseInt(password),email:mail})}}/>
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
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={toRegister}>
              Sign up
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
 
export default connect(null,{logUser})(Login) ;