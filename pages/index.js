import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import Header from "../components/header";
import React, { useEffect, useState, useRef } from "react";
import Chance from "chance";
import { useRouter } from "next/router";
import InfinityGauntlet from "../components/snap/snap";
import DustEffect from "../components/snap/snap";
import green from "../public/assets/green.png";
import techStack from "../public/assets/techStack.png";
import Image from "next/image";
import { parse } from "rss-to-json";
import axios from "axios";
import Head from "next/head";
import { useTheme } from "next-themes";

function Index({ stars }) {
  const [snap, setSnap] = useState(false);
  const wrapperRef = useRef();
  const { theme, setTheme } = useTheme();

  console.log(`stars`, stars);
  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
          <script
            src="https://kit.fontawesome.com/ac46f1394d.js"
            crossorigin="anonymous"
          ></script>
          <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
        </Head>
        <Container >
          <Content />
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark
          </button>
          <Intro /> */}
          {/* <section>
            Tech stack
            <Image src={techStack} alt="Picture of the author" />
          </section>
          <div id="techSection">
            <Image src="https://doodleipsum.com/200?i=41f017cf42bb4f905a48613ec87b613b" />
          </div> */}
     
        </Container>
      </Layout>
    </>
  );
}

export default Index;
// export async function getStaticProps() {
//   // const allPosts = getAllPosts([
//   //   'title',
//   //   'date',
//   //   'slug',
//   //   'author',
//   //   'coverImage',
//   //   'excerpt',
//   // ])

//   return {
//     props: { allPosts },
//   }
// }
