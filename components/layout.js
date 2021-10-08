import Footer from "../components/footer";
import Header from "../components/header";
import Particles from "react-particles-js";
import { ParallaxProvider } from "react-scroll-parallax";

import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="relative w-full h-full">
          {/* <div
            style={{
              position: "absolute",
              borderRadius: "50%",

              width: "30%",
              height: "500px",

              left: "22%",
              top: "-154px",
              zIndex: 1,
              background: "#F088C4",
              filter: "blur(100px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              borderRadius: "50%",

              width: "30%",
              height: "500px",
              left: "45%",
              top: "-154px",
              zIndex: 1,
              background: "#FFB066",
              filter: "blur(100px)",
            }}
          ></div> */}
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

          <div class="relative">
            <Header />
            <Meta />
            <div className="min-h-screen">
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
