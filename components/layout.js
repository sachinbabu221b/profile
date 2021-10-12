import Particles from "react-particles-js";
import { motion } from "framer-motion";

import Meta from "../components/meta";
import Head from "next/head";

export default function Layout({ preview, children }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <Head>
        <title>Sachin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          <Particles
            className="absolute z-0 w-full h-full"
            params={{
              particles: {
                number: {
                  value: 260,
                  density: {
                    enable: false,
                  },
                },

                color: {
                  value: "#7B7B78",
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 6,
                    size_min: 0.3,
                  },
                  color: "#fafafa",
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                    color: "#fafafa",
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                    color: "#fafafa",
                  },
                },
              },
            }}
          />

          <div className="relative">
            <Meta />
            <div className="min-h-screen">
              <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
              >
                {children}
              </motion.main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
