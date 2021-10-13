import React from "react";
import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Content from "../components/content";
import { useTheme } from "next-themes";

function Index() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Layout>
        <Container>
          <Content />
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Dark
          </button> */}
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
