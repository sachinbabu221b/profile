import Container from "./container";

import contactIllustration from "../public/assets/contact.png";
import Lottie from "react-lottie";
import animationData from "../public/assets/contact.json";

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
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl text-white lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
      </Container>
    </footer>
  );
}
