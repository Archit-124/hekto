import React from "react";
import "./AboutUs.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-main">
        <Header></Header>
        <div className="aboutus">
          <div className="au-sec1">
            <div className="child-au-sec1">
              <div className="au-title1">About Us</div>
              <div className="au-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>About Us</div>
              </div>
            </div>
          </div>
          <div className="au-sec2">
            <div className="child1-au-sec2">Image</div>
            <div className="child2-au-sec2">
              <h2>Know About Our Ecomerce Business, History</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button>Contact Us</button>
            </div>
          </div>
          <div className="au-sec3">
            <div>
              <h1>Our Features</h1>
            </div>
            <div className="parent-cards3">
              <div className="card3">
                <div className="au-sec3-img1"></div>
                <div className="support3">23/7 Support</div>
                <div className="loremip3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </div>
              </div>
              <div className="card3">
                <div className="au-sec3-img2"></div>
                <div className="support3">23/7 Support</div>
                <div className="loremip3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </div>
              </div>
              <div className="card3">
                <div className="au-sec3-img3"></div>
                <div className="support3">23/7 Support</div>
                <div className="loremip3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </div>
              </div>
              <div className="card3">
                <div className="au-sec3-img4"></div>
                <div className="support3">23/7 Support</div>
                <div className="loremip3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </div>
              </div>
            </div>
          </div>
          <div className="au-sec4">
            <div className="child-au-sec4">
              <h1>Our Client Say!</h1>
              <div className="parent-au-sec4-images">
                <div className="au-sec4-img1"></div>
                <div className="au-sec4-img2"></div>
                <div className="au-sec4-img3"></div>
              </div>
              <div className="selina">
                <h4>Selina Gomez</h4>
                <p>Ceo At Webecy Digital</p>
              </div>
              <p className="au-sec4-lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
              <div className="au-dots-img"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
