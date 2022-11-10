import React from "react";
import "./BlogPage.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
const BlogPage = () => {
  return (
    <div>
      <div className="Blogpage-main">
        <Header></Header>
        <div className="blogPage">
          <div className="bp-sec1">
            <div className="child-bp-sec1">
              <div className="bp-title1">Blog Page</div>
              <div className="bp-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Blog Page</div>
              </div>
            </div>
          </div>
          <div className="bp-sec2">
            <div className="child-bp-sec2">
              <div className="left-bp-sec2">
                <div className="child-left-bp-sec2">
                  <div className="left-bp-sec2-img1"></div>
                  <ul className="left-bp-sec2-ul1">
                    <li className="left-bp-sec2-ul1-sa">Surf Auxion</li>
                    <li className="left-bp-sec2-ul1-date">Aug 09 2020</li>
                  </ul>
                  <h1>Mauris at orci non vulputate diam tincidunt nec.</h1>
                  <p className="left-bp-sec2-para1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className="left-bp-sec2-readMore">Read More</div>
                </div>
                <div className="child-left-bp-sec2">
                  <div className="left-bp-sec2-img22"></div>
                  <ul className="left-bp-sec2-ul1">
                    <li className="left-bp-sec2-ul1-sa">Surf Auxion</li>
                    <li className="left-bp-sec2-ul1-date">Aug 09 2020</li>
                  </ul>
                  <h1>Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
                  <p className="left-bp-sec2-para1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className="left-bp-sec2-readMore">Read More</div>
                </div>
                <div className="child-left-bp-sec2">
                  <div className="left-bp-sec2-img33"></div>
                  <ul className="left-bp-sec2-ul1">
                    <li className="left-bp-sec2-ul1-sa">Surf Auxion</li>
                    <li className="left-bp-sec2-ul1-date">Aug 09 2020</li>
                  </ul>
                  <h1>Sit nam congue feugiat nisl, mauris amet nisi. </h1>
                  <p className="left-bp-sec2-para1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <div className="left-bp-sec2-readMore">Read More</div>
                </div>
                <div className="child2-left-bp-sec2">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                </div>
              </div>
              <div className="right-bp-sec2">
                <div className="child1-right-bp-sec2">
                  <h4>Search</h4>
                  <input type="search" placholder="Search For Posts"></input>
                </div>
                <div className="child2-right-bp-sec2">
                  <h4>Categories</h4>
                  <div className="subButtonss-child2-right-bp-sec2">
                    <div className="subButton-child2-right-bp-sec2">
                      Hobbies (14)
                    </div>
                    <div className="subButton-child2-right-bp-sec2">
                      Women (21)
                    </div>
                    <div className="subButton-child2-right-bp-sec2">
                      Women (21)
                    </div>
                    <div className="subButton-child2-right-bp-sec2">
                      Women (21)
                    </div>
                    <div className="subButton-child2-right-bp-sec2">
                      Women (21)
                    </div>
                    <div className="subButton-child2-right-bp-sec2">
                      Women (21)
                    </div>
                  </div>
                </div>
                <div className="child3-right-bp-sec2">
                  <h4>Recent Post</h4>
                  <div className="child3-right-bp-cardss">
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-img1"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          It is a long established fact
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-img2"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          It is a long established fact
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-img3"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          It is a long established fact
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-img4"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          It is a long established fact
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="child4-right-bp-sec2 child3-right-bp-sec2">
                  <h4>Sale Product</h4>
                  <div className="child3-right-bp-cardss">
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-spimg1"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          Elit ornare in enim mauris.
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-spimg2"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          Viverra pulvinar et enim.
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                    <div className="child3-right-bp-card">
                      <div className="child3-right-bp-card-spimg3"></div>
                      <div>
                        <div className="child3-right-bp-card-rptext">
                          Mattis varius donec fdsfd
                        </div>
                        <div className="child3-right-bp-card-rpdata">
                          Aug 09 2020
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="child5-right-bp-sec2">
                  <h4>Offer product</h4>
                  <div className="child5-right-bp-op">
                    <div className="child5-right-bp-opCard1">
                      <div className="child5-right-bp-opCard1-img1"></div>
                      <h5>Duis lectus est.</h5>
                      <p>$12.00 - $15.00</p>
                    </div>
                    <div className="child5-right-bp-opCard1">
                      <div className="child5-right-bp-opCard1-img2"></div>
                      <h5>Duis lectus est.</h5>
                      <p>$12.00 - $15.00</p>
                    </div>
                    <div className="child5-right-bp-opCard1">
                      <div className="child5-right-bp-opCard1-img3"></div>
                      <h5>Duis lectus est.</h5>
                      <p>$12.00 - $15.00</p>
                    </div>
                    <div className="child5-right-bp-opCard1">
                      <div className="child5-right-bp-opCard1-img4"></div>
                      <h5>Duis lectus est.</h5>
                      <p>$12.00 - $15.00</p>
                    </div>
                  </div>
                </div>
                <div className="child6-right-bp-sec2">
                  <h4>Follow</h4>
                  <div className="child6-right-bp-sec2-media">
                    <div className="child6-right-bp-sec2-fb"></div>
                    <div className="child6-right-bp-sec2-insta"></div>
                    <div className="child6-right-bp-sec2-twt"></div>
                  </div>
                </div>
                <div className="child7-right-bp-sec2">
                  <h4>Tags</h4>
                  <div className="child7-right-bp-sec2-tags">
                    <div>General</div>
                    <div>Atsanil</div>
                    <div>Insas.</div>
                    <div>Bibsaas</div>
                    <div>Nulla.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp-sec3">
            <div className="bp-sec3-img"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
