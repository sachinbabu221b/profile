import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import AnimatedCursor from "../components/cursor/animatedCursor";

import "../styles/index.css";
import dynamic from "next/dynamic";

// const AnimatedCursor = dynamic(() => import(''), {
//   ssr: false
// });
export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <AnimatedCursor
        innerSize={24}
        outerSize={16}
        color="50, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      /> */}
      <ThemeProvider defaultTheme="light" attribute="style">
        <Header />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
