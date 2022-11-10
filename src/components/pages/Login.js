import React from "react";
import "./Login.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
const Login = () => {
  return (
    <div>
      <div className="login-main">
        <Header />
        <div className="login">
          <div className="lo-sec1">
            <div className="child-lo-sec1">
              <div className="lo-title1">My Account</div>
              <div className="lo-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>My Account</div>
              </div>
            </div>
          </div>
          <div className="lo-sec2">
            <div className="child-lo-sec2">
              <h2>Login</h2>
              <p>Please login using account detail bellow.</p>
              <form className="lo-form">
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password"></input>
                <p className="lo-fp">Forget your password?</p>
                <button>Sign in</button>
              </form>
              <div className="lo-sec2-lasttext">
                Don’t have an Account?Create account
              </div>
            </div>
          </div>
          <div className="lo-sec3">
            <div className="lo-sec3-img"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
