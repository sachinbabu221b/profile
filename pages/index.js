import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Index({ allPosts }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const style = {
    marginRight: 10,
    color: "black",
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Container>
          <button
            type="button"
            className="p-2 ring-1 ring-offset-blue-900"
            onClick={() => router.push("/pagenew")}
          >
            Click me
          </button>
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