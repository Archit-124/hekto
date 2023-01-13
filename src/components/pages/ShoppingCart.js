import React, { useEffect } from "react";
import "./ShoppingCart.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useState } from "react";
import GetShoppingCart from "../Service/User";

const ShoppingCart = () => {
  const {
    get_byShoppingCart,
    post_dlt_ByShoppingCart,
    post_Decrement,
    post_Increment,
    post_ClearCart,
  } = GetShoppingCart;
  const [storedAPIData, setstoredAPIData] = useState(null);
  const [activeDeleteModal, setactiveDeleteModal] = useState(false);

  const [count, setCount] = useState(1);
  const [incData, setincData] = useState({
    cartItems: {
      productId: "",
      quantity: "",
      price: "",
      categoryId: "",
    },
  });
  const handleIncrement = async (pdtID, quan, price, category) => {
    try {
      incData.cartItems.productId = pdtID;
      incData.cartItems.quantity = 1;
      incData.cartItems.price = price;
      incData.cartItems.categoryId = category;
      const res = await post_Increment(incData);
    } catch (error) {
      console.log(error);
    }
    handleApiCall();
  };
  useEffect(() => {
    handleIncrement();
  }, []);

  const handleDecrement = async (pdtID, quan, price, category) => {
    incData.cartItems.productId = pdtID;
    incData.cartItems.quantity = 1;
    incData.cartItems.price = price;
    incData.cartItems.categoryId = category;
    console.log(incData);
    try {
      const res = await post_Decrement(incData);
    } catch (error) {
      console.log(error);
    }

    handleApiCall();
    console.log("Decrement");
  };

  const [cartisEmpty, setcartisEmpty] = useState(true);
  const handleApiCall = async () => {
    try {
      const res = await get_byShoppingCart();
      console.log(res);
      console.log(res.cartItems);

      setstoredAPIData(res);
      if (res === "no user found" || res.cartItems <= 0) {
        setcartisEmpty(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleApiCall();
  }, []);

  const [pRD_ID, setpRD_ID] = useState("");
  const handleDelete = async (pID) => {
    setpRD_ID(pID);
    setactiveDeleteModal(true);
  };

  const handleYesBtn = async (pID) => {
    setactiveDeleteModal(false);
    try {
      const res = await post_dlt_ByShoppingCart({ productId: pID });
      console.log(res);
      handleApiCall();
    } catch (error) {
      console.log(error);
    }
  };
  const handleNoBtn = () => {
    setactiveDeleteModal(false);
  };

  // Clear Cart
  const handleClearCartButton = async () => {
    try {
      const res = await post_ClearCart();
      handleApiCall();
    } catch (error) {
      console.log(error);
    }
  };

  // Hide Component
  const [hideComponent, sethideComponent] = useState("ComponentA");
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
            {hideComponent === "ComponentA" && (
              <div className="child-sc-sec2">
                <div className="left-sc-sec2">
                  <div className="left-sc-sec2-allTitles">
                    <h3 className="left-sc-sec2-products1">Product</h3>
                    <h3 className="left-sc-sec2-price1">Price</h3>
                    <h3 className="left-sc-sec2-quantity1">Quantity</h3>
                    <h3 className="left-sc-sec2-total1">Total</h3>
                  </div>
                  <div className="left-sc-sec2-allcards">
                    {!cartisEmpty && (
                      <div className="Cart-empty-text">
                        <h3>Cart is Empty</h3>
                      </div>
                    )}
                    {storedAPIData?.cartItems?.map((itms) => (
                      <div className="left-sc-sec2-card1">
                        <div className="left-sc-sec2-card1-imgtext">
                          <img
                            className="left-sc-sec2-card1-img1"
                            alt="/"
                            src={itms?.productId?.images?.map(
                              (img) => img?.img
                            )}
                          ></img>
                          <div className="left-sc-sec2-card1-text">
                            <div className="left-sc-sec2-card1-text-title">
                              {itms?.productId?.productName}
                            </div>
                            <p className="left-sc-sec2-card1-ptag">
                              Color:Brown
                            </p>
                            <p>Size:XL</p>
                          </div>
                        </div>
                        <div className="left-sc-sec2-card1-price">
                          ${itms?.productId?.price / 100}
                        </div>
                        <div className="left-sc-sec2-card1-quantity">
                          <div className="left-sc-sec2-card1-quantity-img-count">
                            <button
                              className="count-buttons"
                              onClick={() =>
                                handleDecrement(
                                  itms?.productId._id,
                                  itms?.quantity,
                                  itms?.productId.price,
                                  itms?.categoryId._id
                                )
                              }
                              disabled={itms.quantity === 1}
                            >
                              -
                            </button>
                            <span className="counter-span">
                              {itms?.quantity}
                            </span>
                            <button
                              className="count-buttons"
                              onClick={() =>
                                handleIncrement(
                                  itms?.productId._id,
                                  itms?.quantity,
                                  itms?.productId.price,
                                  itms?.categoryId._id
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="left-sc-sec2-card1-total">
                          ${itms?.price / 100}
                        </div>
                        <div
                          // onClick={() => handleDeleteBtn(itms?.productId?._id)}
                          onClick={() => handleDelete(itms?.productId?._id)}
                          className="dlt-image"
                        ></div>
                      </div>
                    ))}
                    <div className="br"></div>
                    {activeDeleteModal && (
                      <div className="sc-popUp-Delete">
                        <h2>Confirm Delete Item?</h2>
                        <div>
                          <button
                            onClick={() => handleYesBtn(pRD_ID)}
                            className="sc-pop-btn"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => handleNoBtn()}
                            className="sc-pop-btn"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="left-sc-sec2-buttons">
                    <button>Update Curt</button>
                    <button onClick={handleClearCartButton}>Clear Curt</button>
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
                      <button
                        className="child-right-sc-form-btn1"
                        onClick={() => sethideComponent("ComponentB")}
                      >
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
            )}
            {/* Preview Kart  */}
            {hideComponent === "ComponentB" && (
              <div className="sc-preview-cart">
                Preview Kart
                <div className="left-sc-sec2">
                  <div className="left-sc-sec2-allTitles">
                    <h3 className="left-sc-sec2-products1">Product</h3>
                    <h3 className="left-sc-sec2-price1">Price</h3>
                    <h3 className="left-sc-sec2-quantity1">Quantity</h3>
                    <h3 className="left-sc-sec2-total1">Total</h3>
                  </div>
                  <div className="left-sc-sec2-allcards">
                    {!cartisEmpty && (
                      <div className="Cart-empty-text">
                        <h3>Cart is Empty</h3>
                      </div>
                    )}
                    {storedAPIData?.cartItems?.map((itms) => (
                      <div className="left-sc-sec2-card1">
                        <div className="left-sc-sec2-card1-imgtext">
                          <img
                            className="left-sc-sec2-card1-img1"
                            alt="/"
                            src={itms?.productId?.images?.map(
                              (img) => img?.img
                            )}
                          ></img>
                          <div className="left-sc-sec2-card1-text">
                            <div className="left-sc-sec2-card1-text-title">
                              {itms?.productId?.productName}
                            </div>
                            <p className="left-sc-sec2-card1-ptag">
                              Color:Brown
                            </p>
                            <p>Size:XL</p>
                          </div>
                        </div>
                        <div className="left-sc-sec2-card1-price">
                          ${itms?.productId?.price / 100}
                        </div>
                        <div className="left-sc-sec2-card1-quantity">
                          <div className="new-sc-wuantity-preview">
                            <span className="counter-span">
                              {itms?.quantity}
                            </span>
                          </div>
                        </div>
                        <div className="left-sc-sec2-card1-total">
                          ${itms?.price / 100}
                        </div>
                      </div>
                    ))}
                    <div className="br"></div>
                    {activeDeleteModal && (
                      <div className="sc-popUp-Delete">
                        <h2>Confirm Delete Item?</h2>
                        <div>
                          <button
                            onClick={() => handleYesBtn(pRD_ID)}
                            className="sc-pop-btn"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => handleNoBtn()}
                            className="sc-pop-btn"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="sc-formAddress">
                    <div className="child-sc-formAddress">
                      <h2>Shipping Address</h2>
                      <form>
                        <div className="sc-form-allinputs">
                          <label>Address:</label>
                          <textarea rows="4" cols="50"></textarea>
                        </div>
                        <div className="sc-form-allinputss">
                          <label>City: </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Enter City"
                          ></input>
                        </div>
                        <div className="sc-form-allinputss">
                          <label>State: </label>
                          <input
                            type="text"
                            name="state"
                            placeholder="Enter State"
                          ></input>
                        </div>
                        <div className="sc-form-allinputss">
                          <label>PhoneNumber: </label>
                          <input
                            type="number"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                          ></input>
                        </div>
                        <button className="sc-form-btn">Submit</button>
                      </form>
                    </div>
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
                      <button
                        className="child-right-sc-form-btn1"
                        onClick={() => sethideComponent("ComponentA")}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ShoppingCart;
