import React from "react";
import "./Faq.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { TextField, TextareaAutosize, Button } from "@mui/material";
const Faq = () => {
  return (
    <div>
      <div className="faq-main">
        <Header></Header>
        <div className="faq">
          <div className="faq-sec1">
            <div className="child-faq-sec1">
              <div className="faq-title1">FAQ</div>
              <div className="faq-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>FAQ</div>
              </div>
            </div>
          </div>
          <div className="faq-sec2">
            <div className="child-faq-sec2">
              <div className="left-faq-sec2">
                <h2>Generel Information</h2>
                <div className="left1-faq-sec2">
                  <div>Eu dictumst cum at sed euismood condimentum?</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="left1-faq-sec2">
                  <div>Magna bibendum est fermentum eros.</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="left1-faq-sec2">
                  <div>Odio muskana hak eris conseekin sceleton?</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="left1-faq-sec2">
                  <div>Elit id blandit sabara boi velit gua mara?</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
              </div>
              <div className="right-faq-sec2">
                <h3 className="right-faq-sec2-head">Ask a Question</h3>
                <form className="right-faq-sec2-form">
                  <TextField
                    className="right-faq-sec20-textfield"
                    id="outlined-basic"
                    label="Your Name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    className="right-faq-sec20-textfield"
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    required
                  />
                  <TextareaAutosize
                    className="right-faq-sec20-textarea"
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Type Your Message"
                    style={{ width: 200 }}
                    required
                  />
                  <Button className="right-faq-sec20-btn" variant="contained">
                    Send Mail
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="gd-sec3">
            <div className="gd-sec3-img"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Faq;
