import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import contactIllustration from "../public/assets/contact.png";
import Image from "next/image";

import Head from "next/head";
import React, { useEffect } from "react";
import MapChart from "../components/map";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import india from "../public/assets/india.json";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
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
          <div className="grid grid-cols-2  ml-10 mb-10 ">
            <div className=" p-3 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Contact
              <div className="grid grid-cols-6">
                <span className="">
                  <AiOutlineLinkedin size={40} className="text-black" />
                </span>
                <span className="">
                  <AiOutlineMail size={40} className="text-black" />
                </span>
                <span>
                  <AiOutlineMedium size={40} className="text-black" />
                </span>
                <span>
                  <AiOutlineInstagram size={40} className="text-black" />
                </span>
                <span>
                  <AiOutlineWhatsApp size={40} className="text-black" />
                </span>
                {/* <div className=" p-3  text-white rounded font-bold mb-2 font-nunito  text-2xl text-white  tracking-tighter leading-tight">
              <Image src={linkedin} alt="Picture of the author" width="40px" height="40px"/>
              </div> */}
              </div>
            </div>
            {/* <div className="p-10 h-full">
              <MapChart />
            </div> */}
          </div>
        </Container>
      </Layout>
    </>
  );
}
