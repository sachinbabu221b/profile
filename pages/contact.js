import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import contactIllustration from "../public/assets/contact.png";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";
import Head from "next/head";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import MapChart from "../components/map";
import { stamenToner } from "pigeon-maps/providers";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import india from "../public/assets/india.json";

const PROJECTION_CONFIG = {
  scale: 1000,
  center: [78.9629, 22.5937],
};

export default function Contact() {
  const router = useRouter();
  const geographyStyle = {
    default: {
      outline: "none",
    },
    hover: {
      fill: "#ccc",
      transition: "all 250ms",
      outline: "none",
    },
    pressed: {
      outline: "none",
    },
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </Head>
        <Container>
          <div className="grid grid-cols-2 gap-2 -mt-24 ml-10 mb-10 ">
            <div className=" p-3 rounded font-bold text-3xl mb-2 font-nunito text-center">
              <Image src={contactIllustration} />
              <div>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ip
              </div>
            </div>
            <div className="p-10">
              <MapChart />
            </div>
          </div>
          <button
            className="p-2 ring-1 ring-offset-blue-900"
            type="button"
            onClick={() => router.push("/")}
          >
            Click me
          </button>

          {/* <Content /> */}
        </Container>
      </Layout>
    </>
  );
}
