import React from "react";
import "./Home.css";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

import Image from "../pages/image";
const Home = () => {
  return (
    <div className="mainnnnnn">
      <Header></Header>
      <div className="containerHome">
        <div className="slider">
          <AwesomeSlider>
            <div
              style={{
                backgroundImage: `url(${Image.image1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <h1>Hekto</h1> <button>Buy now</button> */}
            </div>
            <div
              style={{
                backgroundImage: `url(${Image.image2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${Image.image3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </AwesomeSlider>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="Homesec2">
        <div className="child-Homesec2">
          <div className="FP2">
            <h2>Featured Products</h2>
          </div>
          <div className="chair-card">
            <div className="chair-cards">
              <div className="chair-img1"></div>
              <div className="details2">
                <h3>Cantilever chair</h3>
                <div>Colors</div>
                <div className="code2">Code - Y523201</div>
                <div className="price2">$42.00</div>
              </div>
            </div>
            <div className="chair-cards">
              <div className="chair-img2"></div>
              <div className="details2">
                <h3>Cantilever chair</h3>
                <div>Colors</div>
                <div className="code2">Code - Y523201</div>
                <div className="price2">$42.00</div>
              </div>
            </div>
            <div className="chair-cards">
              <div className="chair-img3"></div>
              <div className="details2">
                <h3>Cantilever chair</h3>
                <div>Colors</div>
                <div className="code2">Code - Y523201</div>
                <div className="price2">$42.00</div>
              </div>
            </div>
            <div className="chair-cards">
              <div className="chair-img4"></div>
              <div className="details2">
                <h3>Cantilever chair</h3>
                <div>Colors</div>
                <div className="code2">Code - Y523201</div>
                <div className="price2">$42.00</div>
              </div>
            </div>
            {/* <div className="chair-cards">Card2</div>
            <div className="chair-cards">Card3</div>
            <div className="chair-cards">Card4</div> */}
          </div>
          <div className="dots1"></div>
        </div>
      </div>
      <div className="Homesec3">
        <div className="child1-Homesec3 ">
          <h1>Latest Products</h1>
          <div>
            <h5>New Arrival</h5>
            <h5>Best Seller</h5>
            <h5>Featured</h5>
            <h5>Special Offer </h5>
          </div>
        </div>
        <div className="child2-Homesec3">
          <div className="Homesec3-chairs">
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img1"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img2"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img3"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img4"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img5"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="Homesec3-chair">
              <div className="Homesec3-div">
                <div className="Homesec3-img6"> </div>
              </div>
              <div className="sec3-text1">
                <h2 className="CHC">Comfort Handy Craft</h2>
                <div>
                  <h4>$42.00</h4>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="Homesec3-chairs">
            
          </div> */}
        </div>
      </div>
      <div className="Homesec4">
        <div>
          <h1>What Shopex Offer!</h1>
        </div>
        <div className="parent-cards4">
          <div className="card4">
            <div className="homesec4-img1"></div>
            <div className="support4">24/7 Support</div>
            <div className="loremip4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="card4">
            <div className="homesec4-img2"></div>
            <div className="support4">24/7 Support</div>
            <div className="loremip4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="card4">
            <div className="homesec4-img3"></div>
            <div className="support4">24/7 Support</div>
            <div className="loremip4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
          <div className="card4">
            <div className="homesec4-img4"></div>
            <div className="support4">24/7 Support</div>
            <div className="loremip4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </div>
          </div>
        </div>
      </div>
      <div className="Homesec5">
        <div className="sec5-child sec5-img1"></div>
        <div className="sec5-child ufoltp">
          <div>
            <h2>Unique Features Of leatest & Trending Poducts</h2>
          </div>
          <div className="allList4">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </div>
          <div className="btn4">
            <button>Add To Cart</button>
            <div>
              <div>B&B Italian Sofa </div>
              <div>$32.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Homesec6">
        <div>
          <h1>Trending Products</h1>
        </div>
        <div className="Homechair6">
          <div className="chair6">
            <div className="Homesec6-img1"></div>
            <div>
              <h3>Cantilever chair</h3>
            </div>
            <div className="sec6-price">
              <h5>$26.00 </h5>
              <p>$42.00</p>
            </div>
          </div>
          <div className="chair6">
            <div className="Homesec6-img2"></div>
            <div>
              <h3>Cantilever chair</h3>
            </div>
            <div className="sec6-price">
              <h5>$26.00 </h5>
              <p>$42.00</p>
            </div>
          </div>
          <div className="chair6">
            <div className="Homesec6-img3"></div>
            <div>
              <h3>Cantilever chair</h3>
            </div>
            <div className="sec6-price">
              <h5>$26.00 </h5>
              <p>$42.00</p>
            </div>
          </div>
          <div className="chair6">
            <div className="Homesec6-img4"></div>
            <div>
              <h3>Cantilever chair</h3>
            </div>
            <div className="sec6-price">
              <h5>$26.00 </h5>
              <p>$42.00</p>
            </div>
          </div>
        </div>
        <div className="home-offer6">
          <div className="child-home-offer6">
            <div className="div6">
              <h3>23% off in all products</h3>
              <p className="shopnow6 ">Shop Now</p>
            </div>
            <p className="homesec6-img5"></p>
          </div>
          <div className="child-home-offer6 backclr6">
            <div className="div6">
              <h3>23% off in all products</h3>
              <p className="shopnow6 ">View Collection</p>
            </div>
            <p className="homesec6-img6"></p>
          </div>
          <div className="child-home-offer6 last-child-offer6">
            <div className="esc">
              <div className="parent-homesec6-img7">
                <div className="homesec6-img7"></div>
              </div>
              <div className="sec6-text1">
                <div>
                  <h3>Executive Seat chair</h3>
                </div>
                <p>$32.00</p>
              </div>
            </div>
            <div className="esc">
              <div className="parent-homesec6-img7">
                <div className="homesec6-img8"></div>
              </div>
              <div className="sec6-text1">
                <div>
                  <h3>Executive Seat chair</h3>
                </div>
                <p>$32.00</p>
              </div>
            </div>
            <div className="esc">
              <div className="parent-homesec6-img7">
                <div className="homesec6-img9"></div>
              </div>
              <div className="sec6-text1">
                <div>
                  <h3>Executive Seat chair</h3>
                </div>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Homesec7">
        <div className="child-Homesec7">
          <h1>Discount Item</h1>
          <div className="Homesec7-coll">
            <p>Wood Chair</p>
            <p>Plastic Chair</p>
            <p>Sofa Colletion</p>
          </div>
        </div>
        <div className="child2-homesec7">
          <div className="home7-alltext">
            <h3>20% Discount Of All Products</h3>
            <p className="ESC7">Eams Sofa Compact</p>
            <p className="loremtxt7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="child-text7">
              <div>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
              </div>
              <div>
                <li>Clear lines and geomatric figures</li>
                <li>Material expose like metals</li>
              </div>
            </div>
            <button>Shop Now</button>
          </div>
          <div className="homesec7-img1"></div>
        </div>
      </div>
      <div className="Homesec8">
        <h1>Top Categories</h1>
        <div className="card8">
          <div className="child-card8">
            <div className="card8-circle">
              <div className="card8-img1"></div>
            </div>
            <div className="mlc">Mini LCW Chair</div>
            <div className="price8">$56.00</div>
          </div>
          <div className="child-card8">
            <div className="card8-circle">
              <div className="card8-img3"></div>
            </div>
            <div className="mlc">Mini LCW Chair</div>
            <div className="price8">$56.00</div>
          </div>
          <div className="child-card8">
            <div className="card8-circle">
              <div className="card8-img2"></div>
            </div>
            <div className="mlc">Mini LCW Chair</div>
            <div className="price8">$56.00</div>
          </div>
          <div className="child-card8">
            <div className="card8-circle">
              <div className="card8-img1"></div>
            </div>
            <div className="mlc">Mini LCW Chair</div>
            <div className="price8">$56.00</div>
          </div>
        </div>
        <div className="dots8"></div>
      </div>
      <div className="Homesec9">
        <div className="home9-img1">
          <h1>Get Leatest Update By Subscribe 0ur Newslater</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="Homesec10">
        <div className="home-img10"></div>
      </div>
      <div className="Homesec11">
        <h1>Leatest Blog</h1>
        <div className="parent-card11">
          <div className="card11">
            <div className="card11-img1"></div>
            <div className="card11-text">
              <div className="child-card11-text">
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img1"></div>
                  <p>SaberAli</p>
                </div>
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img2"></div>
                  <p>21 August,2020</p>
                </div>
              </div>
              <div className="card11-head1">Top esssential Trends in 2021</div>
              <p>
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <div className="readmore11">Read More</div>
            </div>
          </div>
          <div className="card11">
            <div className="card11-img2"></div>
            <div className="card11-text">
              <div className="child-card11-text">
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img1"></div>
                  <p>SaberAli</p>
                </div>
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img2"></div>
                  <p>21 August,2020</p>
                </div>
              </div>
              <div className="card11-head1">Top esssential Trends in 2021</div>
              <p>
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <div className="readmore11">Read More</div>
            </div>
          </div>
          <div className="card11">
            <div className="card11-img3"></div>
            <div className="card11-text">
              <div className="child-card11-text">
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img1"></div>
                  <p>SaberAli</p>
                </div>
                <div className="child1-card11-text">
                  <div className="child1-card11-text-img2"></div>
                  <p>21 August,2020</p>
                </div>
              </div>
              <div className="card11-head1">Top esssential Trends in 2021</div>
              <p>
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <div className="readmore11">Read More</div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
