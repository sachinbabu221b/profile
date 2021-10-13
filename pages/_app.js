import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import "../styles/index.css";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider defaultTheme="light" attribute="class">
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
