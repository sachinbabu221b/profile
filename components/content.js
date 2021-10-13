import React, { useState, useRef } from "react";
import orange from "../public/assets/orange_stone.png";
import red from "../public/assets/red.png";
import blue from "../public/assets/blue.png";
import violet from "../public/assets/violet.png";
import green from "../public/assets/green.png";
import yellow from "../public/assets/yellow.png";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import work from "../public/assets/work.json";
import code from "../public/assets/code.json";
import blog from "../public/assets/blog.json";
import design from "../public/assets/designs.json";
import arrow from "../public/assets/up-arrow.png";
import { AiFillUpCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import AnimatedStones from "./stones_motion";
// const AnimatedStones = (props) => {
//   const { keys, transitionOptions, idToScroll, imageSrc, imageAlt } = props;
//   return (
//     <motion.div
//       key={keys}
//       transition={transitionOptions}
//       animate={{
//         y: ["0%", "-15%"],
//       }}
//       whileHover={{
//         scale: 1.3,
//       }}
//       onClick={() => {
//         document
//           .getElementById(idToScroll)
//           .scrollIntoView({ block: "end", behavior: "smooth" });
//       }}
//     >
//       <Image src={imageSrc} alt={imageAlt} />
//     </motion.div>
//   );
// };

const Content = () => {
  const router = useRouter();
  const bounceTransition = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  const workOptions = {
    loop: true,
    autoplay: true,
    animationData: work,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const codeOption = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const blogOption = {
    loop: true,
    autoplay: true,
    animationData: blog,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const designOption = {
    loop: true,
    autoplay: true,
    animationData: design,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="grid grid-cols-6 ml-10 gap-y-16  mb-10" id="tops">
        <div className="col-span-6 text-9xl font-extrabold text-transparent pb-3 bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim">
          Explore my <br />
          infinity stone
        </div>
        <div className="col-span-6 text-2xl -mt-16 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim">
          Click on stone to explore
        </div>
        <AnimatePresence>
          <div className="mt-28">
            <AnimatedStones
              keys="orange_stone"
              transitionOptions={bounceTransition}
              idToScroll="tech"
              imageSrc={orange}
              imageAlt="Picture of the author"
            />
          </div>
          <div className="mt-28">
            <AnimatedStones
              keys="red_stone"
              transitionOptions={bounceTransition}
              idToScroll="work"
              imageSrc={red}
              imageAlt="Picture of the author"
            />
          </div>
          <div className="mt-28">
            <AnimatedStones
              keys="blue_stone"
              transitionOptions={bounceTransition}
              idToScroll="blogs"
              imageSrc={blue}
              imageAlt="Picture of the author"
            />
          </div>
          <div className="mt-28">
            <AnimatedStones
              keys="violet_stone"
              transitionOptions={bounceTransition}
              idToScroll="design"
              imageSrc={violet}
              imageAlt="Picture of the author"
            />
          </div>
          <div className="mt-28">
            <AnimatedStones
              keys="green_stone"
              transitionOptions={bounceTransition}
              idToScroll="design"
              imageSrc={green}
              imageAlt="Picture of the author"
            />
          </div>
          <div className="mt-28">
            <AnimatedStones
              keys="yellow_stone"
              transitionOptions={bounceTransition}
              idToScroll="design"
              imageSrc={yellow}
              imageAlt="Picture of the author"
            />
          </div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-6 gap-2 -mt-24 ml-10 mb-10 ">
        <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
          Mind Stone
        </div>
        <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
          Reality Stone
        </div>
        <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
          Space Stone
        </div>
        <div
          className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center"
          onClick={() =>
            document
              .getElementById("design")
              .scrollIntoView({ block: "end", behavior: "smooth" })
          }
        >
          Power Stone
        </div>
        <div
          className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center"
          onClick={() =>
            document
              .getElementById("tech")
              .scrollIntoView({ block: "end", behavior: "smooth" })
          }
        >
          Time Stone
        </div>
        <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
          Soul Stone
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24 " id="tech">
        <div className=" p-3   pt-28">
          <div className="col-span-6 text-7xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
            Works
          </div>
          <div className="font-nunito  text-4xl mt-12">
            A selection of projects I've worked on, during my career as a
            software developer.
          </div>
          <button
            class="text-indigo-500 mt-16 background-transparent font-nunito font-bold  px-3 py-1 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => router.push("/works")}
          >
            {`--> View All`}
          </button>
        </div>
        <div className=" p-3 rounded text-3xl">
          <Lottie options={workOptions} height={600} width={600} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24" id="work">
        <div className=" p-3 rounded text-3xl">
          <Lottie options={codeOption} height={500} width={600} />
        </div>
        <div className=" p-3 pt-28 ">
          <div className="col-span-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
            Tech Stack
          </div>
          <div className="font-nunito text-4xl mt-12">
            A selection of projects I've worked on, during my career as a
            software developer.
          </div>
          <button
            class="text-indigo-500 mt-16 background-transparent font-nunito font-bold  px-3 py-1 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => router.push("/tech")}
          >
            {`--> View All`}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24" id="blogs">
        <div className=" p-3 pt-28">
          <div className="col-span-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
            Blogs
          </div>
          <div className="font-nunito text-4xl mt-12">
            A selection of projects I've worked on, during my career as a
            software developer.
          </div>
          <button
            class="text-indigo-500 mt-16 background-transparent font-nunito font-bold  px-3 py-1 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => router.push("/blogs")}
          >
            {`--> View All`}
          </button>
        </div>
        <div className=" p-3 rounded text-3xl">
          <Lottie options={blogOption} height={500} width={630} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24" id="design">
        <div className=" p-3 rounded text-3xl">
          <Lottie options={designOption} height={520} width={600} />
        </div>
        <div className=" p-3 pt-28">
          <div className="col-span-6 text-7xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
            Designs
          </div>
          <div className="font-nunito text-4xl mt-12 ">
            A selection of projects I've worked on, during my career as a
            software developer.
          </div>
          <button
            class="text-indigo-500 mt-16 background-transparent font-nunito font-bold  px-3 py-1 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => router.push("/designs")}
          >
            {`--> View All`}
          </button>
        </div>
      </div>
      {/* <button
            className="fixed bottom-24 right-10 bg-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              scroll(0,0);
            }}
        >
          <AiFillUpCircle size={50}/>
          </button> */}
    </>
  );
};

export default Content;
