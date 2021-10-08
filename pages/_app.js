import "../styles/index.css";
import { AnimatePresence, motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars";
// import {ParticlesContainer} from '../components/particle'
import { ThemeProvider } from "next-themes";
import Particles from 'react-particles-js';

export default function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    // <ParticlesContainer>
    <ThemeProvider defaultTheme="light" attribute="class">
 
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <Scrollbars
          style={{ width: "100%", height: "100vh" }}
          autoHide
          universal={true}
        >
          <Component {...pageProps} />
        </Scrollbars>
      </motion.div>
      </AnimatePresence>
      </ThemeProvider>

  );
}
