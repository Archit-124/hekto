import React from "react";
import "./SignUp.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import userService from "../Service/User";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Validation from "../Validation/Validation";
const { signup } = userService;
const SignUp = () => {
  const [storedValues, setStoredValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const [successIsVissible, setSuccessIsVisible] = useState(false);
  const [notSuccessIsVissible, setnotSuccessIsVissible] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  console.log(storedValues);
  useEffect(() => {
    if (localStorage.getItem("values")) {
      // return
    }
  }, []);
  const handleChange = (event) => {
    setStoredValues({
      ...storedValues,
      [event.target.name]: event.target.value,
    });
    setErrors({ ...errors, [event.target.name]: "" });

    validateForm();
  };
  const validateForm = () => {
    setFormIsValid(Validation(storedValues, true));
    setErrors(Validation(storedValues, true));
  };
  var [errorResponse, seterrorResponse] = useState("");
  const handleformSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(storedValues, true));

    await signup(storedValues)
      .then((response) => {
        console.log("Success:", response);
        localStorage.setItem("values", JSON.stringify(response.result));
        setSuccessIsVisible(!successIsVissible);
      })
      .catch((error) => {
        console.log(error);
        if (error.success === true) {
          setSuccessIsVisible(!successIsVissible);
        } else if (error.success === false) {
          setnotSuccessIsVissible(!notSuccessIsVissible);
        }
        errorResponse = error.message;
        seterrorResponse(errorResponse);
      });
  };

  const navigate = useNavigate();
  const handleOkButton = () => {
    navigate("/login");
  };
  const handleOkButtonUnsccess = () => {
    setnotSuccessIsVissible(!notSuccessIsVissible);
  };
  // console.log(successIsVissible);
  return (
    <div>
      <div className="signUp-main">
        <Header />
        <div className="signUp">
          <div className="su-form">
            {/* <Axios data={storedValues} /> */}
            <div className="su-title">
              <h1>Sign Up</h1>
            </div>
            <form>
              <div className="su-field">
                {/* <label>UserName</label> */}
                <input
                  name="fullName"
                  type="text"
                  placeholder="Name"
                  required
                  value={storedValues.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="su-error-msg">*{errors.fullName}</p>
                )}
              </div>
              <div className="su-field">
                {/* <label>Email</label> */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  // value={storedValues.email}
                  value={storedValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="su-error-msg">*{errors.email}</p>
                )}
              </div>
              <div className="su-field">
                {/* <label>Password</label> */}
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  // value={storedValues.password}
                  value={storedValues.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="su-error-msg">*{errors.password}</p>
                )}
              </div>
              <button
                disabled={!formIsValid}
                type="submit"
                className="su-btn"
                onClick={handleformSubmit}
              >
                Submit
              </button>
              <Link className="su-a" to={"/login"}>
                Log-in
              </Link>
            </form>
          </div>
          {/* Pop UP  */}
          {successIsVissible && (
            <div className="su-popUp">
              <div className="su-sucess">SignUp Successfull!</div>
              <button className="su-btn2" onClick={handleOkButton}>
                OK
              </button>
            </div>
          )}
          {notSuccessIsVissible && (
            <div className="su-UpopUp">
              <div className="su-unsucess">{errorResponse}</div>
              <button className="su-btn2" onClick={handleOkButtonUnsccess}>
                OK
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
