import "../styles/index.css";
import { AnimatePresence, motion } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
  return (
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
        transition={{ type: 'linear' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
