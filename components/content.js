import React, { useState, useRef } from "react";
import Image from "next/image";
import orange from "../public/assets/orange_stone.png";
import red from "../public/assets/red.png";
import blue from "../public/assets/blue.png";
import violet from "../public/assets/violet.png";
import green from "../public/assets/green.png";
import yellow from "../public/assets/yellow.png";
import Head from "next/head";
import Frame from "react-frame-component";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../public/assets/work.json";
import code from "../public/assets/code.json";
import blog from "../public/assets/blog.json";
import design from "../public/assets/designs.json";
import arrow from "../public/assets/up-arrow.png";
import { AiFillUpCircle } from "react-icons/ai";

function Content() {
  const bounceTransition = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
    <AnimatePresence>
      <Head>
        <title>Sachin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"/>
        <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
      </Head>
      <>
        <div className="grid grid-cols-6 ml-10 gap-y-16 mb-10" id="top">
          <div className="col-span-6 text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim">
            {/* <motion.h3
        style={{ width: 50, height: 50, fontSize: 50 }}
        animate={{
          color: ["#000", "#ff2323", "#000", "#044",]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Text
            </motion.h3> */}
            Explore my <br />
            infinity stone
          </div>
          <div className="col-span-6 text-2xl -mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim">
            Click on stone to explore
          </div>
          <div className="mt-28">
            <motion.div
              key="orange"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-15%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                document
                  .getElementById("tech")
                  .scrollIntoView({ block: "end", behavior: "smooth" });
              }}
            >
              <Image src={orange} alt="Picture of the author" />
            </motion.div>
          </div>
          <div className="mt-28">
            <motion.div
              key="red"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-18%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                document
                  .getElementById("work")
                  .scrollIntoView({ block: "end", behavior: "smooth" });
              }}
            >
              <Image src={red} alt="Picture of the author" />
            </motion.div>
          </div>

          <div className="mt-28">
            <motion.div
              key="blue"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-15%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                document
                  .getElementById("blogs")
                  .scrollIntoView({ block: "end", behavior: "smooth" });
              }}
            >
              <Image src={blue} alt="Picture of the author" />
            </motion.div>
          </div>

          <div className="mt-28">
            <motion.div
              key="violet"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-17%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                document
                  .getElementById("design")
                  .scrollIntoView({ block: "end", behavior: "smooth" });
              }}
            >
              <Image src={violet} alt="Picture of the author" />
            </motion.div>
          </div>

          <div className="mt-28">
            <motion.div
              key="green"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-18%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
            >
              <Image src={green} alt="Picture of the author" />
            </motion.div>
          </div>

          <div className="mt-28">
            <motion.div
              key="yellow"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-18%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
            >
              <Image src={yellow} alt="Picture of the author" />
            </motion.div>
          </div>
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
          <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
            Power Stone
          </div>
          <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
            Time Stone
          </div>
          <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
            Soul Stone
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24 " id="tech">
          <div className=" p-3  text-center  pt-28">
            <div className="col-span-6 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Works
            </div>
            <div className="font-nunito text-left text-4xl mt-12">
              A selection of projects I've worked on, during my career as a
              software developer.
            </div>
            <button
              class="text-indigo-500 mt-20 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              View More
            </button>
          </div>
          <div className=" p-3 rounded text-3xl">
            <Lottie options={defaultOptions} height={600} width={600} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24" id="work">
          <div className=" p-3 rounded text-3xl">
            <Lottie options={codeOption} height={500} width={600} />
          </div>

          <div className=" p-3  text-center  pt-28 ">
            <div className="col-span-6 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Tech Stack
            </div>
            <div className="font-nunito text-left text-4xl mt-12">
              A selection of projects I've worked on, during my career as a
              software developer.
            </div>
            <button
              class="text-indigo-500 mt-20 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              View More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-10 mb-10 mt-24" id="blogs">
          <div className=" p-3  text-center  pt-28">
            <div className="col-span-6 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Blogs
            </div>
            <div className="font-nunito text-4xl mt-12 text-left ">
              A selection of projects I've worked on, during my career as a
              software developer.
            </div>
            <button
              class="text-indigo-500 mt-20 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              View More
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

          <div className=" p-3  text-center  pt-28">
            <div className="col-span-6 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Designs
            </div>
            <div className="font-nunito text-4xl mt-12 text-left ">
              A selection of projects I've worked on, during my career as a
              software developer.
            </div>
            <button
              class="text-indigo-500 mt-20 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              View More
            </button>
          </div>
        </div>
        <button
            className="fixed bottom-24 right-10 bg-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              document
                .getElementById("top")
                .scrollIntoView({ block: "start", behavior: "smooth" });
            }}
        >
          <AiFillUpCircle size={50}/>
            {/* <Image src={arrow} height="20px" width="20px"></Image> */}
          </button>
      </>
    </AnimatePresence>
  );
}

export default Content;
