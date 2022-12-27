import React from "react";
import "./Login.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    // const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      // [name]: value,
      [event.target.name]: event.target.value,
    }));
    validateForm();
  };
  const validateForm = () => {
    const newErrors = {};

    const email = formData.email;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) {
      newErrors.email = "Email is Required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const password = formData.password;
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (password.length > 15) {
      newErrors.password = "Password must be no more than 15 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      axios
        .post(
          "https://api-ecommerce-dev.devtomaster.com/v1/user/login",
          formData
        )
        .then((response) => {
          console.log("Success:", response);
          // console.log(response.data.result.accessToken);
          setIsLoading(false);
          setIsSuccess(true);
          // delay(10000);
          localStorage.setItem(
            "access_token",
            response.data.result.accessToken
          );
          navigate("/home");
        })
        .catch((error) => {
          console.log("Error:()", error);
          setIsLoading(false);
          setErrors(error.message);
        });
    }
    // console.log(formData.email);
  };

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
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="lo-error">*{errors.email}</p>}
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                ></input>
                {errors.password && (
                  <p className="lo-error">*{errors.password}</p>
                )}
                <p className="lo-fp">Forget your password?</p>
                <button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? "Loading..." : "Submit"}
                </button>
                {isSuccess && <div className="lo-success">Success!</div>}
              </form>
              <div className="lo-sec2-lasttext">
                Don’t have an Account?{" "}
                <Link className="lo-a" to="/signUP">
                  Create account
                </Link>
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
