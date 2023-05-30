import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./contact.css";
function Contact() {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0, 30),
    1: useScrollFadeIn("up", 2, 0.4, 30),
    2: useScrollFadeIn("up", 2, 0.6, 30),
    3: useScrollFadeIn("up", 2, 0.8, 30),
    4: useScrollFadeIn("up", 2, 1.0, 30),
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="contact">
        <div className="contacttitle">
          <h1 className="contacttitle_text" {...animatedItem[0]}>
            Contact me
          </h1>
        </div>
      </div>
      <div className="contactbody">
        <div className="contact">
          <a
            href="https://www.instagram.com/ju_ho23/"
            target="_blank"
            {...animatedItem[1]}
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://t.me/ssunny_lee"
            target="_blank"
            {...animatedItem[2]}
          >
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a
            href="https://github.com/2ssunny"
            target="_blank"
            {...animatedItem[3]}
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://open.kakao.com/o/sWKeIEif"
            target="_blank"
            {...animatedItem[4]}
          >
            <i class="fa-solid fa-message"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
