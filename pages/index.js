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
import axios from "axios";
import Head from "next/head";
import { useTheme } from "next-themes";

function Index() {

  const { theme, setTheme } = useTheme();
  return (
    <>
      <Layout>
        <Container>
          <Content />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark
          </button>
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
