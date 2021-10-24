import Container from "./container";
import Lottie from "react-lottie";
import animationData from "../public/assets/beer.json";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [size, setSize] = useState(28);

  useEffect(() => {
    console.log(`window.width`, window.innerWidth);
    if (window.innerWidth > 425) {
      setSize(32);
    }
  }, []);
  return (
    <footer className="bg-black border-t border-accent-2 font-itim text-white font-extrabold tracking-tighter leading-tight pl-10 ">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded  mb-2 text-7xl sm:text-8xl">
          Buy me a beer.
          <div class="flex flex-row mt-4">
            <div
              className="mr-4"
              onClick={() =>
                window
                  .open(
                    "https://www.linkedin.com/in/sachin-babu-69a93b177/",
                    "_blank"
                  )
                  .focus()
              }
            >
              <AiOutlineLinkedin size={size} />
            </div>
            <div className="mr-4">
              <AiOutlineMail
                size={size}
                onClick={() =>
                  window
                    .open("mailto:sachinbabu6174@gmail.com", "_blank")
                    .focus()
                }
              />
            </div>
            <div className="mr-4">
              <AiOutlineMedium
                size={size}
                onClick={() =>
                  window
                    .open("https://sachinbabu6174.medium.com/", "_blank")
                    .focus()
                }
              />
            </div>
            <div className="mr-4">
              <AiOutlineInstagram
                size={size}
                onClick={() =>
                  window
                    .open("https://www.instagram.com/sachinbabu221b/", "_blank")
                    .focus()
                }
              />
            </div>
            <div>
              <AiOutlineWhatsApp
                size={size}
                onClick={() =>
                  window
                    .open("https://wa.me/8281163920?text=Hi%20Sachin", "_blank")
                    .focus()
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-3 text-xl font-normal mt-10 sm:mt-48">
            <div class="flex flex-row ">
              <div
                className="mr-8"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1i-4nTrUiE3o7iXMcFCol7Rv3i1xLrKat/view?usp=sharing"
                  );
                }}
              >
                Download my resume
              </div>
              <div className="mb-20">Handcrafted by me</div>
            </div>
          </div>
        </div>
        <div className=" sm:visible p-3  rounded font-bold text-3xl mb-20 font-nunito text-center">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </footer>
  );
}
