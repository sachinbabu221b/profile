import Container from "./container";

import contactIllustration from "../public/assets/contact.png";
import Lottie from "react-lottie";
import animationData from "../public/assets/beer.json";
import linkedin from "../public/assets/linkedin.png";
import instagram from "../public/assets/instagram.png";
import mail from "../public/assets/gmail.png";
import medium from "../public/assets/medium.png";
import whatsapp from "../public/assets/whatsapp.png";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

import Image from "next/image";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <footer className="bg-black border-t border-accent-2">
      <Container>
        <div className="grid grid-cols-3 gap-2">
          <div className=" p-3  rounded font-bold text-3xl mb-2 font-nunito text-center">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className=" p-3   col-span-2 rounded font-bold mb-2 font-nunito  text-8xl text-white font-extrabold tracking-tighter leading-tight">
            Buy me a beer.
            <div className="grid grid-cols-6">
              <span className="">
                <AiOutlineLinkedin size={40} />
              </span>
              <span className="">
                <AiOutlineMail size={40} />
              </span>
              <span>
                <AiOutlineMedium size={40} />
              </span>
              <span>
                <AiOutlineInstagram size={40} />
              </span>
              <span>
                <AiOutlineWhatsApp size={40} />
              </span>
              {/* <div className=" p-3  text-white rounded font-bold mb-2 font-nunito  text-2xl text-white  tracking-tighter leading-tight">
              <Image src={linkedin} alt="Picture of the author" width="40px" height="40px"/>
              </div> */}
            </div>
            <div
              className="grid grid-cols-1 text-2xl text-white font-normal mt-8 tracking-tighter leading-tight"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1i-4nTrUiE3o7iXMcFCol7Rv3i1xLrKat/view?usp=sharing"
                );
              }}
            >
              Download my resume
            </div>
            <div className="grid grid-cols-1 text-2xl text-white font-normal mt-8 tracking-tighter leading-tight">
              Handcrafted by me
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
