import React from "react";
import "./Shoplist.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useNavigate } from "react-router-dom";
import { cardsss } from "../mockdata/sl";

const Shoplist = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shoplist-main">
        <Header />
        <div className="shoplist">
          <div className="sl-sec1">
            <div className="child-sl-sec1">
              <div className="sl-title1">Shop List</div>
              <div className="sl-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Shop List</div>
              </div>
            </div>
          </div>
          <div className="sl-sec2">
            <div className="child-sl-sec2">
              <div className="sl-sec2-allheadings">
                <div className="sl-sec2-heading">
                  <h3>Ecommerce Acceories & Fashion item </h3>
                  <p>About 9,620 results (0.62 seconds)</p>
                </div>
                <div className="sl-sec2-perpage">
                  <div>Per Page:</div>
                  <input />
                </div>
                <div className="sl-sec2-sortby">
                  <div>Sort By:</div>
                  <input placeholder="Best Match" />
                </div>
                <div className="sl-sec2-views">
                  <div className="child-sl-sec2-views">View:</div>
                  <div
                    className="sl-sec2-views-img1"
                    onClick={() => navigate("/gridDefault")}
                  ></div>
                  <div className="sl-sec2-views-img2"></div>
                  <input />
                </div>
              </div>
              <div className="sl-sec2-parent-cards">
                {cardsss.map((card) => (
                  <div className="sl-sec2-card">
                    <div className="sl-sec2-card-img1"></div>
                    <div className="sl-sec2-sidetext">
                      <div className="sl-sec2-sidetext-title">
                        <h2>{card.title}</h2>
                        <div className="parent-sl-dots">
                          <div className="sl-sec2-sidetext-orangedot1"></div>
                          <div className="sl-sec2-sidetext-pinkdot1"></div>
                          <div className="sl-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sl-sec2-card-dollars">
                        <div className="sl-sec2-child1-dollar">
                          {card.price}
                        </div>
                        <div className="sl-sec2-child2-dollar">
                          {card.offer}
                        </div>
                        <div className="sl-stars"></div>
                      </div>
                      <p>{card.description}</p>
                      <div className="sl-sec2-icons">
                        <div className="sl-sec2-icons-icn1"></div>
                        <div className="sl-sec2-icons-icn2"></div>
                        <div className="sl-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="gd-sec3">
            <div className="gd-sec3-img"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shoplist;
