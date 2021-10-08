import Footer from "../components/footer";
import Header from "../components/header";
import Particles from 'react-particles-js';

import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="relative w-full">
          <Particles
            className="absolute z-0 w-full"
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: false,
                  },
                },

                color: {
                  value: "#0000ff",
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 6,
                    size_min: 0.3,
                  },
                  color: "#0000ff",
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
                    color: "#0000ff",
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                    color: "#0000ff",
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
