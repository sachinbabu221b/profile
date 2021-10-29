import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import React, { useEffect } from "react";
import sachin from "../public/assets/sachin.png";
import Image from "next/image";
import Gallery from "react-photo-gallery"
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMedium,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Contact() {
  const router = useRouter();
  const photos = [
    {
      src: "https://doodleipsum.com/700?i=ba4b0b8bf4feeb961f38a69c5d2dbef3",
      width: 4,
      height: 3,
    },
    {
      src: "https://doodleipsum.com/300/abstract?i=bca1e8588e68e8c73a6b721edae668c9",
      width: 1,
      height: 1,
    },
    {
      src: "https://doodleipsum.com/300/abstract?i=bca1e8588e68e8c73a6b721edae668c9",
      width: 1,
      height: 1,
    },
    {
      src: "https://doodleipsum.com/300/abstract?i=bca1e8588e68e8c73a6b721edae668c9",
      width: 1,
      height: 1,
    },
    {
      src: "https://doodleipsum.com/700?i=ba4b0b8bf4feeb961f38a69c5d2dbef3",
      width: 4,
      height: 3,
    },
    {
      src: "https://doodleipsum.com/300/abstract?i=bca1e8588e68e8c73a6b721edae668c9",
      width: 1,
      height: 1,
    },
  ];
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
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito ">
                <Image
                  class=" object-center rounded-lg "
                  src={sachin}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito ">
                Sachin Babu
              </div>
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
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito mt-10">
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
                    <div class="order-1 bg-green-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-gray-800 text-xl">
                        Tranzmeo
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
                    <div class="order-1 bg-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-xl">
                        42 Square Technologies
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
            <div><Gallery photos={photos} /></div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
