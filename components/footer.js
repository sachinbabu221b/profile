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
          <div className=" p-3   col-span-2 rounded  mb-2 font-itim  text-8xl text-white font-extrabold tracking-tighter leading-tight">
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
                <AiOutlineLinkedin size={42} />
              </div>
              <div className="mr-4">
                <AiOutlineMail
                  size={42}
                  onClick={() =>
                    window
                      .open("mailto:sachinbabu6174@gmail.com", "_blank")
                      .focus()
                  }
                />
              </div>
              <div className="mr-4">
                <AiOutlineMedium
                  size={42}
                  onClick={() =>
                    window
                      .open("https://sachinbabu6174.medium.com/", "_blank")
                      .focus()
                  }
                />
              </div>
              <div className="mr-4">
                <AiOutlineInstagram
                  size={42}
                  onClick={() =>
                    window
                      .open(
                        "https://www.instagram.com/sachinbabu221b/",
                        "_blank"
                      )
                      .focus()
                  }
                />
              </div>
              <div>
                <AiOutlineWhatsApp
                  size={42}
                  onClick={() =>
                    window
                      .open(
                        "https://wa.me/8281163920?text=Hi%20Sachin",
                        "_blank"
                      )
                      .focus()
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 text-xl text-white font-normal mt-48 tracking-tighter leading-tight font-itim">
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
                <div>Handcrafted by me</div>
              </div>
            </div>
          </div>
          <div className=" p-3  rounded font-bold text-3xl mb-20 font-nunito text-center">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
