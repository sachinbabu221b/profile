import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import React, { useEffect } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </Head>
        <Container>
          <div className="grid grid-cols-2  ml-10 mb-10 min-h-screen ">
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
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
