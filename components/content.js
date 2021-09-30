import React from "react";
import Image from "next/image";
import orange from "../public/assets/orange_stone.png";
import red from "../public/assets/red.png";
import blue from "../public/assets/blue.png";
import violet from "../public/assets/violet.png";
import green from "../public/assets/green.png";
import yellow from "../public/assets/yellow.png";
import { motion } from "framer-motion";

export default function Content() {
  const bounceTransition = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };
  return (
    <section className="flex-col md:flex-row flex items-center md: mt-24 mb-24 md:mb-24">
      <motion.div
        key="orange"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={orange} alt="Picture of the author" />
        {/* <div className="text-2xl  -mt-20       text-center">dfgdfg</div> */}
      </motion.div>
      <motion.div
        key="red"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={red} alt="Picture of the author" />
      </motion.div>
      <motion.div
        key="blue"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={blue} alt="Picture of the author" />
      </motion.div>

      <motion.div
        key="violet"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={violet} alt="Picture of the author" />
      </motion.div>
      <motion.div
        key="green"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={green} alt="Picture of the author" />
      </motion.div>
      <motion.div
        key="yellow"
        transition={bounceTransition}
        animate={{
          y: ["0%", "-10%"],
        }}
        whileHover={{
          scale: 1.5,
        }}
      >
        <Image src={yellow} alt="Picture of the author" />
      </motion.div>
    </section>
  );
}
