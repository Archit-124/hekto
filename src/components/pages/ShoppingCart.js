import React from "react";
import "./ShoppingCart.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const ShoppingCart = () => {
  return (
    <div>
      <div className="ShoppingCart-main">
        <Header></Header>
        <div className="ShoppingCart">
          <div className="sc-sec1">
            <div className="child-sc-sec1">
              <div className="sc-title1">Shopping Curt</div>
              <div className="sc-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Shopping Curt</div>
              </div>
            </div>
          </div>
          <div className="sc-sec2">
            <div className="child-sc-sec2">
              <div className="left-sc-sec2">
                <div className="left-sc-sec2-allTitles">
                  <h3 className="left-sc-sec2-products1">Product</h3>
                  <h3 className="left-sc-sec2-price1">Price</h3>
                  <h3 className="left-sc-sec2-quantity1">Quantity</h3>
                  <h3 className="left-sc-sec2-total1">Total</h3>
                </div>
                <div className="left-sc-sec2-allcards">
                  <div className="left-sc-sec2-card1">
                    <div className="left-sc-sec2-card1-imgtext">
                      <div className="left-sc-sec2-card1-img1"></div>
                      <div className="left-sc-sec2-card1-text">
                        <div className="left-sc-sec2-card1-text-title">
                          Ut diam consequat
                        </div>
                        <p className="left-sc-sec2-card1-ptag">Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="left-sc-sec2-card1-price">$32.00</div>
                    <div className="left-sc-sec2-card1-quantity">
                      <div className="left-sc-sec2-card1-quantity-img"></div>
                    </div>
                    <div className="left-sc-sec2-card1-total">£219.00</div>
                  </div>
                  <div className="br"></div>
                  <div className="left-sc-sec2-card1">
                    <div className="left-sc-sec2-card1-imgtext">
                      <div className="left-sc-sec2-card1-img2"></div>
                      <div className="left-sc-sec2-card1-text">
                        <div className="left-sc-sec2-card1-text-title">
                          Ut diam consequat
                        </div>
                        <p className="left-sc-sec2-card1-ptag">Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="left-sc-sec2-card1-price">$32.00</div>
                    <div className="left-sc-sec2-card1-quantity">
                      <div className="left-sc-sec2-card1-quantity-img"></div>
                    </div>
                    <div className="left-sc-sec2-card1-total">£219.00</div>
                  </div>
                  <div className="br"></div>
                  <div className="left-sc-sec2-card1">
                    <div className="left-sc-sec2-card1-imgtext">
                      <div className="left-sc-sec2-card1-img3"></div>
                      <div className="left-sc-sec2-card1-text">
                        <div className="left-sc-sec2-card1-text-title">
                          Ut diam consequat
                        </div>
                        <p className="left-sc-sec2-card1-ptag">Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="left-sc-sec2-card1-price">$32.00</div>
                    <div className="left-sc-sec2-card1-quantity">
                      <div className="left-sc-sec2-card1-quantity-img"></div>
                    </div>
                    <div className="left-sc-sec2-card1-total">£219.00</div>
                  </div>
                  <div className="br"></div>
                  <div className="left-sc-sec2-card1">
                    <div className="left-sc-sec2-card1-imgtext">
                      <div className="left-sc-sec2-card1-img4"></div>
                      <div className="left-sc-sec2-card1-text">
                        <div className="left-sc-sec2-card1-text-title">
                          Ut diam consequat
                        </div>
                        <p className="left-sc-sec2-card1-ptag">Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="left-sc-sec2-card1-price">$32.00</div>
                    <div className="left-sc-sec2-card1-quantity">
                      <div className="left-sc-sec2-card1-quantity-img"></div>
                    </div>
                    <div className="left-sc-sec2-card1-total">£219.00</div>
                  </div>
                  <div className="br"></div>
                  <div className="left-sc-sec2-card1">
                    <div className="left-sc-sec2-card1-imgtext">
                      <div className="left-sc-sec2-card1-img5"></div>
                      <div className="left-sc-sec2-card1-text">
                        <div className="left-sc-sec2-card1-text-title">
                          Ut diam consequat
                        </div>
                        <p className="left-sc-sec2-card1-ptag">Color:Brown</p>
                        <p>Size:XL</p>
                      </div>
                    </div>
                    <div className="left-sc-sec2-card1-price">$32.00</div>
                    <div className="left-sc-sec2-card1-quantity">
                      <div className="left-sc-sec2-card1-quantity-img"></div>
                    </div>
                    <div className="left-sc-sec2-card1-total">£219.00</div>
                  </div>
                  <div className="br"></div>
                </div>
                <div className="left-sc-sec2-buttons">
                  <button>Update Curt</button>
                  <button>Clear Curt</button>
                </div>
              </div>
              <div className="right-sc-sec2">
                <div className="child-right-sc-sec2">
                  <h2>Cart Totals</h2>
                  <div className="child-right-sc-form">
                    <div className="child-right-sc-form-totalsss">
                      <h4>Subtotals:</h4>
                      <p>‎£219.00</p>
                    </div>
                    <div className="br"></div>
                    <div className="child-right-sc-form-totalsss">
                      <h4>Totals:</h4>
                      <p>‎£325.00</p>
                    </div>
                    <div className="br"></div>
                    <li>Shipping & taxes calculated at checkout</li>
                    <button className="child-right-sc-form-btn1">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
                <div className="child-right-sc-sec2">
                  <h2>Calculate Shopping</h2>
                  <div className="child-right-sc-form">
                    <div className="child-right-sc-form-totalsss">
                      <p>Bangladesh</p>
                    </div>
                    <div className="br"></div>
                    <div className="child-right-sc-form-totalsss">
                      <p>Mirpur Dhaka - 1200</p>
                    </div>
                    <div className="br"></div>
                    <div className="child-right-sc-form-totalsss">
                      <p>Postal Code</p>
                    </div>
                    <div className="br"></div>
                    <button className="child-right-sc-form-btn2">
                      Calculate Shiping
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ShoppingCart;
