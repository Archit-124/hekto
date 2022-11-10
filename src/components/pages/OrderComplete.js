import React from "react";
import "./OrderComplete.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const OrderComplete = () => {
  return (
    <div className="oc-main">
      <Header></Header>
      <div className="oc-container1">
        <div className="oc-sec1">
          <div className="child-oc-sec1">
            <div className="oc-title1">Shop Left Sidebar</div>
            <div className="oc-sec1-pages">
              <div>Home </div>
              <div>Pages</div>
              <div>Shop Left Sidebar</div>
            </div>
          </div>
        </div>
        <div className="oc-sec2">
          <div className="child-oc-sec2">
            <div className="oc-sec2-img1">
              <div className="oc-sec2-img2">
                <div className="oc-sec2-img3"></div>
              </div>
            </div>
            <div className="oc-title2">Your Order Is Completed!</div>
            <div className="oc-tq-text">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </div>
            <button className="oc-btn2">Continue Shopping</button>
          </div>
          <div className="oc-sec2-img4"></div>
        </div>
        <div className="oc-clock"></div>
        <div className="oc-note"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderComplete;
