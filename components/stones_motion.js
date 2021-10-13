import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Layout(props) {
  const { keys, transitionOptions, idToScroll, imageSrc, imageAlt } = props;
  return (
    <motion.div
      key={keys}
      transition={transitionOptions}
      animate={{
        y: ["0%", "-15%"],
      }}
      whileHover={{
        scale: 1.3,
      }}
      onClick={() => {
        document
          .getElementById(idToScroll)
          .scrollIntoView({ block: "end", behavior: "smooth" });
      }}
    >
      <Image src={imageSrc} alt={imageAlt} />
    </motion.div>
  );
}
