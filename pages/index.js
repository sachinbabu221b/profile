import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import Header from "../components/header";


import { useRouter } from "next/router";

import Head from "next/head";

export default function Index({ allPosts }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Container>
          <Intro />
          <Content />
        </Container>
      </Layout>
    </>
  );
}

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
