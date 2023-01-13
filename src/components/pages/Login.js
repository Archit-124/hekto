import React, { useEffect } from "react";
import "./Login.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Post_byLogin from "../Service/User";

const Login = () => {
  const { post_byLogin, get_UserLoginDetails, put_UpdateLoginDetails } =
    Post_byLogin;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
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
      const response1 = await post_byLogin(formData)
        .then((response) => {
          console.log("Success:", response);
          setIsLoading(false);
          setIsSuccess(true);

          console.log(response.message);
          localStorage.setItem("access_token", response.result.accessToken);
          navigate("/home");
        })
        .catch((error) => {
          console.log("Error:()", error);
          setIsLoading(false);
          setErrors(error.message);
        });
    }
  };
  // My Profile
  const [loginData, setloginData] = useState("");

  const loginProfile = async () => {
    try {
      const res = await get_UserLoginDetails();
      console.log(res);
      setloginData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loginProfile();
  }, []);
  const data = loginData?.result?.userDetails;
  const [activeprofileModal, setactiveprofileModal] = useState(false);
  const handleEditProfile = () => {
    setactiveprofileModal(true);
  };

  // Update API

  const [fullName, setUpdateFullName] = useState("");
  const [email, setUpdateEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("profilePic", profilePic);
    try {
      const res = await put_UpdateLoginDetails(formData);
    } catch (error) {
      setErrors(error.message);
      console.log(error);
    }
    loginProfile();
    setactiveprofileModal(false);
  };
  const handleCloseIcon = () => {
    setactiveprofileModal(false);
  };

  // Image upload
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  // Image previewer

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
          <div>
            <div className="profile">
              <div className="child-profile">
                <div className="parent-profile-img">
                  <img
                    alt=""
                    src={data?.profilePic}
                    className="child-profile-img"
                  />
                </div>
                <div className="parent-sc-details">
                  <div className="child-sc-details">
                    <label>Full Name:</label>
                    <div className="parent-names">
                      <p>{data?.fullName}</p>
                      <div
                        onClick={handleEditProfile}
                        className="pencil-img"
                      ></div>
                    </div>
                  </div>
                  <div className="child-sc-details">
                    <label>Email:</label>
                    <div className="parent-names">
                      <p>{data?.email}</p>
                      {/* <div className="pencil-img"></div> */}
                    </div>
                  </div>
                </div>
                {activeprofileModal && (
                  <div className="profile-edit-modal">
                    <form
                      className="child-profile-edit-modal"
                      onSubmit={handleUpdateSubmit}
                    >
                      <label>Choose a Profile Picture:</label>
                      <input
                        type="file"
                        name="profilePic"
                        onChange={handleFileChange}
                      />
                      <img alt="" src={previewUrl} width="200" />
                      <label>Full Name:</label>
                      {/* <input type="text" placeholder="Enter Full Name" /> */}
                      <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={(event) =>
                          setUpdateFullName(event.target.value)
                        }
                      />
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setUpdateEmail(event.target.value)}
                      />
                      {errors.email && (
                        <p className="lo-error">*{errors.email}</p>
                      )}
                      <button
                        // onClick={handleUpdateSubmit}
                        type="submit"
                        className="login-modal-btn"
                        // disabled={setSubmitButtonDisabled}
                      >
                        Update
                      </button>
                      <div
                        onClick={handleCloseIcon}
                        className="profile-modal-close-icon"
                      ></div>
                    </form>
                  </div>
                )}
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
