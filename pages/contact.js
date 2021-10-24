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
              About Me
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
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito mb-20 mt-20">
                Sachin Babu photo
                intro
              </div>
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito mb-20 mt-20">
                Career
              </div>
              <div class="container  mx-auto w-full ">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                    style={{ left: "50%" }}
                  ></div>

                  <div class="mb-8 flex justify-between items-center right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto font-semibold text-lg text-white">
                        1
                      </h1>
                    </div>
                    <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-gray-800 text-xl">
                        Lorem Ipsum
                      </h3>
                      <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>

                  <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto text-white font-semibold text-lg">
                        2
                      </h1>
                    </div>
                    <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-xl">
                        Lorem Ipsum
                      </h3>
                      <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>Download my resume</div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
