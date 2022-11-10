import React from "react";
import "./ContactUs.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="contactUs-main">
        <Header />
        <div className="contactUs">
          <div className="cu-sec1">
            <div className="child-cu-sec1">
              <div className="cu-title1">Contact Us</div>
              <div className="cu-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>
          <div className="cu-sec2">
            <div className="parent-child-cu-sec2">
              <div className="child1-cu-sec2">
                <div className="child-child1-cu-sec2">
                  <h2>Information About us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mattis neque ultrices mattis aliquam, malesuada diam est.
                    Malesuada sem tristique amet erat vitae eget dolor lobortis.
                    Accumsan faucibus vitae lobortis quis bibendum quam.
                  </p>
                  <div className="cu-dots-img1"> </div>
                </div>
                <div className="child-child1-cu-sec2">
                  <h2>Contact Way</h2>
                  <div className="cu-parent-cards">
                    <div className="child-cu-parent-cards">
                      <div className="cu-sec2-blue-img"></div>
                      <div className="cu-para1">
                        <p>Tel: 877-67-88-99</p>
                        <p>E-Mail: shop@store.com</p>
                      </div>
                    </div>
                    <div className="child-cu-parent-cards">
                      <div className="cu-sec2-pink-img"></div>
                      <div className="cu-para1">
                        <p>Support Forum</p>
                        <p>For over 24hr</p>
                      </div>
                    </div>
                    <div className="child-cu-parent-cards">
                      <div className="cu-sec2-orange-img"></div>
                      <div className="cu-para1">
                        <p>20 Margaret st, London</p>
                        <p>Great britain, 3NM98-LK</p>
                      </div>
                    </div>
                    <div className="child-cu-parent-cards">
                      <div className="cu-sec2-green-img"></div>
                      <div className="cu-para1">
                        <p>Free standard shipping</p>
                        <p>on all orders.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="child2-cu-sec2">
                <div className="cu-sec2-alltext">
                  <h2>Get In Touch</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mattis neque ultrices tristique amet erat vitae eget dolor
                    los vitae lobortis quis bibendum quam.
                  </p>
                  <form className="cu-form">
                    <div className="cu-name cu-name1">
                      <input type="text" placeholder="Your Name"></input>
                    </div>
                    <div className="cu-name cu-email">
                      <input type="email" placeholder="Your Email"></input>
                    </div>
                    <div className="cu-subject">
                      <input type="text" placeholder="Subject"></input>
                    </div>
                    <div className="cu-msg">
                      <textarea
                        required
                        rows="4"
                        cols="30"
                        name="comment"
                        form="usrform"
                        placeholder="Type Your Message"
                      />
                    </div>
                    <div className="cu-form-btn">
                      <button>Send Mail</button>
                    </div>
                  </form>
                </div>
                <div className="cu-sec2-big-img"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
