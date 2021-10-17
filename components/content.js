import React, { useState, useRef } from "react";
import orange from "../public/assets/orange_stone.png";
import red from "../public/assets/red.png";
import blue from "../public/assets/blue.png";
import violet from "../public/assets/violet.png";
import green from "../public/assets/green.png";
import yellow from "../public/assets/yellow.png";
import snapa from "../public/assets/snap.png";
import iron from "../public/assets/ironman.png";

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
import Image from "next/image";
import dynamic from "next/dynamic";

const InfinityGauntlet = dynamic(() => import("react-thanos-snap"), {
  ssr: false,
});
const Content = () => {
  const router = useRouter();
  const [snap, setsnap] = useState(false);
  const [snap2, setsnap2] = useState(false);
  const [snap3, setsnap3] = useState(false);

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
      <div className="grid grid-cols-1" id="tops">
        <div
          className="text-6xl sm:text-9xl
       sm:pb-3 font-extrabold text-transparent
        bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim"
        >
          Explore my <br />
          infinity stone
        </div>
        <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-itim">
          Click on stone to explore
        </div>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-20 sm:mt-40">
          <div className="font-bold text-xl font-nunito text-center mb-10 sm:text-3xl ">
            <InfinityGauntlet snap={snap}>
              <motion.div
                key="orange_stone"
                transition={bounceTransition}
                animate={{
                  y: ["0%", "-22%"],
                }}
                whileHover={{
                  scale: 1.3,
                }}
                onClick={() => {
                  document
                    .getElementById("works")
                    .scrollIntoView({ block: "start", behavior: "smooth" });
                }}
              >
                <Image src={orange} alt="Picture of the author" />
              </motion.div>
              Mind <br />
              Stone
            </InfinityGauntlet>
          </div>
          <div className="font-bold text-xl font-nunito text-center sm:text-3xl">
            <motion.div
              key="red_stone"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-22%"],
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
              <Image src={red} alt="Picture of the author" />
            </motion.div>
            Reality <br />
            Stone
          </div>
          <div className="font-bold text-xl font-nunito text-center sm:text-3xl">
            <InfinityGauntlet snap={snap}>
              <motion.div
                key="blue_stone"
                transition={bounceTransition}
                animate={{
                  y: ["0%", "-22%"],
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
              Space <br />
              Stone
            </InfinityGauntlet>
          </div>
          <div className="font-bold text-xl font-nunito text-center  sm:text-3xl ">
            <motion.div
              key="violet_stone"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-22%"],
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                document
                  .getElementById("designs")
                  .scrollIntoView({ block: "end", behavior: "smooth" });
              }}
            >
              <Image src={violet} alt="Picture of the author" />
            </motion.div>
            Power <br />
            Stone
          </div>
          <div className="font-bold text-xl font-nunito text-center sm:text-3xl ">
            <InfinityGauntlet snap={snap}>
              <motion.div
                key="green_stone"
                transition={bounceTransition}
                animate={{
                  y: ["0%", "-22%"],
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
                <Image src={green} alt="Picture of the author" />
              </motion.div>
              Time <br />
              Stone
            </InfinityGauntlet>
          </div>
          <div className="font-bold text-xl font-nunito text-center sm:text-3xl ">
            <motion.div
              key="yellow_stone"
              transition={bounceTransition}
              animate={{
                y: ["0%", "-22%"],
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
              <Image src={yellow} alt="Picture of the author" />
            </motion.div>
            Soul <br />
            Stone
          </div>
        </div>
      </AnimatePresence>

      <div
        className="grid grid-cols-2 gap-2 mb-10 font-nunito mt-24 "
        id="works"
      >
        <div className="col-span-2 text-3xl sm:text-7xl sm:p-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
          Works
        </div>
        <div className="col-span-1  text-xl sm:text-3xl sm:mt-24 mt-6 ">
          A selection of projects I've worked on, during my career as a software
          developer.
          <br />
          <button
            className="text-indigo-500 mt-4 font-bold text-lg sm:text-xl"
            type="button"
            onClick={() => router.push("/works")}
          >
            {`--> View All`}
          </button>
        </div>
        <div className="mt-6 sm:mt-0 h-48 w-48 sm:h-5/6 sm:w-5/6">
          <Lottie options={workOptions} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-10 font-nunito mt-24" id="tech">
        <div className="col-span-2 text-3xl sm:text-7xl sm:p-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
          Tech Stack
        </div>
        <div className="mt-6 h-40 w-48 sm:h-auto sm:w-auto">
          <Lottie options={codeOption} />
        </div>
        <div className=" text-xl mt-6 ml-8 sm:text-4xl">
          Anything that which does not bite back, more focusing on the frontend.
          <br />
          <button
            className="text-indigo-500 mt-4 font-bold text-lg sm:text-xl"
            type="button"
            onClick={() => router.push("/works")}
          >
            {`--> View All`}
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-2 mb-10 font-nunito mt-24 "
        id="blogs"
      >
        <div className="col-span-2 text-3xl sm:text-7xl sm:p-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
          Blogs
        </div>

        <div className="col-span-1  text-xl sm:text-4xl sm:mt-24 mt-6 ">
          A selection of projects I've worked on, during my career as a software
          developer.
          <br />
          <button
            className="text-indigo-500 mt-4 font-bold text-lg sm:text-xl"
            type="button"
            onClick={() => router.push("/works")}
          >
            {`--> View All`}
          </button>
        </div>

        <div className="mt-6 sm:mt-0 h-40 w-48 sm:h-auto sm:w-auto">
          <Lottie options={blogOption} />
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-2 mb-10 font-nunito mt-24"
        id="designs"
      >
        <div className="col-span-2 text-3xl sm:text-7xl sm:p-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
          Designs
        </div>

        <div className="mt-6 h-40 w-48 sm:h-5/6 sm:w-5/6">
          <Lottie options={designOption} />
        </div>

        <InfinityGauntlet snap={snap2}>
          <div className=" text-xl mt-6 ml-8 sm:text-4xl">
            Anything that which does not bite back, more focusing on the
            frontend.
            <br />
            <button
              className="text-indigo-500 mt-4 font-bold text-lg sm:text-xl"
              type="button"
              onClick={() => router.push("/works")}
            >
              {`--> View All`}
            </button>
          </div>
        </InfinityGauntlet>
      </div>

      <button
        className="fixed bottom-24 right-10 bg-none ease-linear transition-all duration-150"
        type="button"
      >
        {snap ? (
          <Image
            src={iron}
            height="160px"
            width="160px"
            onClick={() => {
              scroll(0, 0);

              setsnap(!snap);
            }}
          />
        ) : (
          <Image
            src={snapa}
            height="100px"
            width="120px"
            onClick={() => {
              scroll(0, 0);

              setsnap(!snap);
            }}
          />
        )}
      </button>
    </>
  );
};

export default Content;
