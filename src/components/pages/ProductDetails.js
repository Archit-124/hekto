import React, { useEffect, useState } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import "./ProductDetails.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetailsServices from "../Service/ProductDetails_services";
// import Product_Details_idS from "../Service/ProductDetails_services";

const { ProductDetails_services, get_Product_Byid } = ProductDetailsServices;

const ProductDetails = () => {
  const [recievedData, userecievedData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const access_Token = localStorage.getItem("access_token");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_Product_Byid(id);
        console.log(response);
        const result = response.result.product;
        // console.log(result);
        setData(result);
        userecievedData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // console.log(recievedData);
  // console.log(recievedData?.images?.map((imgssss) => imgssss?.img));

  const handleSubmit = async () => {
    console.log("Submit!!");
    const subData = {
      // access_Token: accessToken,
      // userId: accessToken,
      cartItems: {
        accessToken: access_Token,
        productId: recievedData._id,
        quantity: 1,
        price: recievedData.price,
        categoryId: recievedData.category,
      },
    };
    console.log(subData);
    let response = await ProductDetails_services(subData).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="mainProduct">
      <Header></Header>
      <div className="product-container">
        <div className="pc-sec1">
          <div className="child-pc-sec1">
            <h1>Product Details</h1>
            <div className="pd-pages">
              <div>Home</div>
              <div>Pages</div>
              <div>Product Details</div>
            </div>
          </div>
        </div>
        <div className="pc-sec2">
          <div className="pc-sec2-card1">
            <div className="pd-parent-imgs">
              <div className="pd-sub-images">
                <div className="pd-subimg1"></div>
                <div className="pd-subimg2"></div>
                <div className="pd-subimg3"></div>
              </div>

              <img
                src={recievedData?.images?.map((imgssss) => imgssss?.img)}
                alt="Loading"
                className="pd-main-img"
              ></img>
            </div>
            <div className="pd-parent-texts">
              <div className="child-pd-parent-texts">
                <div className="pac2">{recievedData.productName}</div>
                <div className="parent-stars2-img">
                  <div className="stars2-img"></div>
                  <div className="no22">(22)</div>
                </div>
                <div className="pd-price1">
                  <div className="pd-dollar1">${recievedData.price / 100}</div>
                  <div className="pd-dollar2">${recievedData.offer}</div>
                </div>
                <div className="pd-color">Color</div>
                <div className="pd-lorem1">{recievedData?.description}</div>
                <div className="parent-pd-btn">
                  <button className="pd-btn1" onClick={handleSubmit}>
                    Add To Cart
                  </button>
                  <div className="pd-heart-img"></div>
                </div>
                <div className="pd-cate">
                  Categories:{recievedData?.category?.catName}
                </div>
                <div className="pd-tags">Tags</div>
                <div className="parent-pd-share">
                  <div className="pd-share">Share</div>
                  <div className="parent-socialmedia">
                    <div className="pd-fb-img"></div>
                    <div className="pd-insta-img"></div>
                    <div className="pd-twt-img"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pc-sec3">
          <div className="parent-pc-sec3">
            <div className="child-pc-sec3">
              <div>Descriptiom</div>
              <div>Additional Info</div>
              <div>Reviews</div>
              <div>Video</div>
            </div>
            <div className="pc-sec3-text1">
              <h4>{}</h4>
              <div>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverr .
              </div>
            </div>
            <div className="pd-moredetails">
              <h4>More Details</h4>
              <div className="pd-allpara">
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="pc-sec4">
          <div className="child-pc-sec4">
            <div className="pc-sec4-title">
              <div>Related Products</div>
            </div>
            <div className="pd-sec4-cards">
              <div className="pd-sec4-card">
                <div className="pd-sec4-card-img1"></div>
                <div className="mfw">
                  <div className="child-mfw">
                    <div>Mens Fashion Wear</div>
                    <div className="pd-sec4-star-img"></div>
                  </div>
                  <div>$43.00</div>
                </div>
              </div>
              <div className="pd-sec4-card">
                <div className="pd-sec4-card-img2"></div>
                <div className="mfw">
                  <div className="child-mfw">
                    <div>Mens Fashion Wear</div>
                    <div className="pd-sec4-star-img"></div>
                  </div>
                  <div>$43.00</div>
                </div>
              </div>
              <div className="pd-sec4-card">
                <div className="pd-sec4-card-img3"></div>
                <div className="mfw">
                  <div className="child-mfw">
                    <div className="child-child-mfw">Mens Fashion Wear</div>
                    <div className="pd-sec4-star-img"></div>
                  </div>
                  <div className="pd-sec4-dollar2">$43.00</div>
                </div>
              </div>
              <div className="pd-sec4-card">
                <div className="pd-sec4-card-img4"></div>
                <div className="mfw">
                  <div className="child-mfw">
                    <div>Mens Fashion Wear</div>
                    <div className="pd-sec4-star-img"></div>
                  </div>
                  <div>$43.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pc-sec5">
          <div className="pc-sec5-img"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
