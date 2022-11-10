import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import "./Error.css";
const Error = () => {
  return (
    <div>
      <div className="error-main">
        <Header></Header>
        <div className="err">
          <div className="err-sec1">
            <div className="child-err-sec1">
              <div className="err-title1">404 Not Found</div>
              <div className="err-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>404 Not Found</div>
              </div>
            </div>
          </div>
          <div className="err-sec2">
            <div className="child-err-sec2">
              <div className="err-img"></div>
              <button>Back To Home</button>
            </div>
          </div>
          <div className="err-sec3">
            <div className="err-sec3-img"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Error;
