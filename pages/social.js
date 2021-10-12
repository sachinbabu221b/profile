import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Cards from "../components/cards";
import Gallery from "react-photo-gallery";

import Head from "next/head";

export default function Works() {
  const router = useRouter();
  const PHOTO_SET = [
    {
      src: "https://source.unsplash.com/random/1280x720",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/random/1280x720",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/random/1280x720",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/random/1280x720",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/random/1280x720",
      width: 1,
      height: 1,
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Gallery photos={PHOTO_SET} columns={3} direction="row" />
      </Layout>
    </>
  );
}
