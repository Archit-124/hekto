import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TextField from "@mui/material/TextField";
import "./HcktoDemo.css";
const HectoDemo = () => {
  return (
    <div>
      <div className="HectoDemo-main">
        <Header></Header>
        <div className="hectoDemo">
          <div className="hd-sec1">
            <div className="child-hd-sec1">
              <div className="hd-title1">Hekto Demo</div>
            </div>
          </div>
          <div className="hd-sec2">
            <div className="child-hd-sec2">
              <div className="child-hd-header">
                <h2>Hekto Demo</h2>
                <p>Cart/ Information/ Shipping/ Payment</p>
              </div>
              <div className="child-hd-below">
                <div className="child-hd-below-left">
                  <div className="child-hd-below-left-CI">
                    <div className="child1-hd-below-left-CI">
                      <h3>Contact Information</h3>
                      <p className="child-hd-below-left-CI-para">
                        Already have an account?Log in
                      </p>
                    </div>
                    <TextField
                      className="child-hd-below-left-SA-phn"
                      id="standard-required"
                      label="Email or mobile phone number"
                      variant="standard"
                    ></TextField>
                    <li>Keep me up to date on news and excluive offers</li>
                  </div>
                  <div className="child-hd-below-left-SA">
                    <h4>Shipping address</h4>
                    <div className="child-hd-below-left-SA-allInput">
                      <TextField
                        className="child-hd-below-left-SA-name"
                        id="standard-required"
                        label="First name (optional)"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-name"
                        required
                        id="standard-required"
                        label="Last name"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-address"
                        required
                        id="standard-required"
                        label="Address"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-address"
                        id="standard-required"
                        label="Appaetnentment,suit,e.t.c (optinal)"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-address"
                        required
                        id="standard-required"
                        label="City"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-name"
                        required
                        id="standard-required"
                        label="Bangladesh"
                        variant="standard"
                      ></TextField>
                      <TextField
                        className="child-hd-below-left-SA-name"
                        required
                        id="standard-required"
                        label="Postal Code"
                        variant="standard"
                      ></TextField>
                    </div>
                  </div>
                  <div className="child-hd-below-left-Pbutton">
                    <button className="child-hd-below-left-btn1">
                      Continue Shipping
                    </button>
                  </div>
                </div>
                <div className="child-hd-below-right">
                  <div className="child-hd-below-right-card">
                    <div className="child-hd-below-right-CardChild">
                      <div className="child-hd-below-right-img1"></div>
                      <div className="child-hd-below-right-udc">
                        <h4>Ut diam consequat</h4>
                        <p>Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="child-hd-below-right-card-dollar">
                      $32.00
                    </div>
                  </div>
                  <div className="hd-br"></div>
                  <div className="child-hd-below-right-card">
                    <div className="child-hd-below-right-CardChild">
                      <div className="child-hd-below-right-img2"></div>
                      <div className="child-hd-below-right-udc">
                        <h4>Ut diam consequat</h4>
                        <p>Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="child-hd-below-right-card-dollar">
                      $32.00
                    </div>
                  </div>
                  <div className="hd-br"></div>
                  <div className="child-hd-below-right-card">
                    <div className="child-hd-below-right-CardChild">
                      <div className="child-hd-below-right-img3"></div>
                      <div className="child-hd-below-right-udc">
                        <h4>Ut diam consequat</h4>
                        <p>Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="child-hd-below-right-card-dollar">
                      $32.00
                    </div>
                  </div>
                  <div className="hd-br"></div>
                  <div className="child-hd-below-right-card">
                    <div className="child-hd-below-right-CardChild">
                      <div className="child-hd-below-right-img4"></div>
                      <div className="child-hd-below-right-udc">
                        <h4>Ut diam consequat</h4>
                        <p>Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="child-hd-below-right-card-dollar">
                      $32.00
                    </div>
                  </div>
                  <div className="hd-br"></div>
                  <div className="child-hd-below-right-card">
                    <div className="child-hd-below-right-CardChild">
                      <div className="child-hd-below-right-img5"></div>
                      <div className="child-hd-below-right-udc">
                        <h4>Ut diam consequat</h4>
                        <p>Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="child-hd-below-right-card-dollar">
                      $32.00
                    </div>
                  </div>
                  <div className="hd-br"></div>
                  <div className="child-right-hd-sec2">
                    <div className="child-right-hd-form">
                      <div className="child-right-hd-form-totalsss">
                        <h4>Subtotals:</h4>
                        <p>‎£219.00</p>
                      </div>
                      <div className="br"></div>
                      <div className="child-right-hd-form-totalsss">
                        <h4>Totals:</h4>
                        <p>‎£325.00</p>
                      </div>
                      <div className="br"></div>
                      <li>Shipping & taxes calculated at checkout</li>
                      <button className="child-right-hd-form-btn1">
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HectoDemo;
