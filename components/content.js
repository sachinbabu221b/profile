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

function Content() {
  const bounceTransition = {
    y: {
      duration: 1.5,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };
  return (
    <AnimatePresence>
      <Head>
        <title>Sachin</title>

        <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
      </Head>
      <div className="grid grid-cols-6 gap-2 ml-10 gap-y-10 mb-10 mt-40">
        <div className="">
          <motion.div
            key="orange"
            transition={bounceTransition}
            animate={{
              y: ["0%", "-15%"],
            }}
            whileHover={{
              scale: 1.5,
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
        <div className="">
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
        </div>

        <div className="">
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
        </div>

        <div className="">
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
        </div>

        <div className="">
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
        </div>

        <div className="">
          <motion.div
            key="yellow"
            transition={bounceTransition}
            animate={{
              y: ["0%", "-20%"],
            }}
            whileHover={{
              scale: 1.5,
            }}
          >
            <Image src={yellow} alt="Picture of the author" />
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2 -mt-24 ml-10 mb-10 ">
        <div className="bg-blue-300 p-3 rounded text-3xl">Mind stone</div>
        <div className="bg-blue-300 p-3 text-3xl rounded">Reality stone</div>
        <div className="bg-blue-300 p-3 text-3xl rounded">Space stone</div>
        <div className="bg-blue-300 p-3 text-3xl rounded">Power stone</div>
        <div className="bg-blue-300 p-3 text-3xl rounded">Time stone</div>
        <div className="bg-blue-300 p-3 text-3xl rounded">Soul stone</div>
      </div>

      {/* <section>
            Tech stack
            <Image src={techStack} alt="Picture of the author" />
          </section> */}
      <div id="tech">
        <img src="https://doodleipsum.com/700?i=41f017cf42bb4f905a48613ec87b613b" />
      </div>
      {/* <iframe
        src="Content-Security-Policy: frame-ancestors 'self'

 https://sachinbabu6174.medium.com/"
        width="100%"
        height="300"
      > */}

      {/* <IFrame>

</IFrame> */}
      {/* <iframe
  noborder="0" width="830" height="800" scrolling="yes" seamless>
     
</iframe> */}
      <div class="iframely-embed">
        <div class="iframely-responsive">
          <a
            href="https://sachinbabu6174.medium.com"
            data-iframely-url="//cdn.iframe.ly/ifaho3B"
          ></a>
        </div>
      </div>
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
      <iframe
        src="http://api.embed.ly/1/oembed?url=https%3A%2F%2Fsachinbabu6174.medium.com%2F&maxwidth=500"
        name="iFrame Name"
        scrolling="No"
        height="500px"
        width="100%"
      ></iframe>
      <div
        id="retainable-rss-embed"
        data-rss="https://medium.com/feed/@sachinbabu6174"
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="inline"
        data-readmore="Read the rest"
        data-buttonclass="btn btn-primary"
        data-offset="-100"
      ></div>
      <div className="grid grid-cols-1 gap-2 ml-10 mb-10 ">
        <div className="bg-gray-300 p-3 rounded text-3xl"></div>
      </div>
    </AnimatePresence>
  );
}

export default Content;
