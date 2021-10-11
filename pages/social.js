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
        
        <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDYU1CGwAO8vfrlCJbMEYkI%2FE-commerce-Design-Workshop%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
      </Layout>
    </>
  );
}
