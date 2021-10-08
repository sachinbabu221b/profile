import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Cards from "../components/cards";

import Head from "next/head";

export default function Works() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>

        <div className="grid grid-cols-4 gap-2 ml-10 gap-y-10 mb-10">
          <div className="col-span-4 p-3 text-7xl font-bold leading-normal mt-0 text-indigo-800">
            Works
            <div className="text-base font-normal leading-relaxed text-indigo-800">
            A selection of projects I've worked on, during my career as a software developer.
          </div>
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>
          <div className=" p-3 rounded">
            <Cards />
          </div>

        </div>

        {/* <div className="bg-blue-400 min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-white p-3 rounded">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="bg-white p-3 rounded">2</div>
            <div className="bg-white p-3 rounded">3</div>
            <div className="bg-white p-3 rounded">4</div>
            <div className="bg-white p-3 rounded">5</div>
            <div className="bg-white p-3 rounded">6</div>
            <div className="bg-white p-3 rounded">7</div>
            <div className="bg-white p-3 rounded">8</div>
            <div className="bg-white p-3 rounded">9</div>
          </div> */}
        {/* </div> */}
      </Layout>
    </>
  );
}
