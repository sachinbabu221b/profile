import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import Cards from "../components/cards";
import BlogCards from "../components/blogCard";
import Head from "next/head";
import work1 from "../public/assets/work3d.png";
import Image from "next/image";
import Header from "../components/header";

export default function Works() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Container>
          <div className="grid grid-cols-4 gap-2 mb-10">
            <div className="col-span-4 text-6xl sm:text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Works
            </div>

            <div className="col-span-2 p-3 rounded">
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito">
                A selection of projects I've worked on, during my career as a
                software developer.
              </div>
            </div>
            <div className="col-span-2 p-3 rounded ">
              <Image
                class=" object-center rounded-lg "
                src={work1}
                alt="Picture of the author"
              />
            </div>
            <div className="col-span-4 text-6xl mt-20  mb-20 sm:text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              How I made this site ?
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">Next JS</h1>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">Tailwind CSS</h1>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">Framer Motion</h1>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">Particle JS</h1>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">Thanos snap</h1>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-w-md mx-auto bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden md:max-w-sm h-36">
              <div class="flex justify-center items-center w-full h-50 p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-2xl text-white font-medium">
                    Lottie Animations
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-span-4 text-6xl mt-20 mb-20 sm:text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Other Works
            </div>
            <div className="col-span-1 md:col-span-1 p-3 rounded">
              <Cards heading="Ecomerce App" />
            </div>
            <div className="col-span-1 md:col-span-1 p-3 rounded">
              <Cards heading="Vue Js and GSAP app" />
            </div>
            <div className="col-span-1 md:col-span-1 p-3 rounded">
              <Cards heading="Image Previewer" />
            </div>
            <div className="col-span-1 md:col-span-1 p-3 rounded">
              <Cards heading="Html Previewer" />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
