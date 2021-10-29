import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import Cards from "../components/cards";
import Image from "next/image";
import javascript from "../public/assets/javascript.png";
import react from "../public/assets/react.png";
import firebase from "../public/assets/firebase.png";

import Head from "next/head";

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
              Tech Stack
            </div>
            <div className="col-span-2 p-3 rounded">
              <div className="col-span-4 text-5xl sm:text-6xl text-left font-normal  font-nunito">
                A selection of projects I've worked on, during my career as a
                software developer.
              </div>
            </div>
            <div className="col-span-2 p-3 rounded ">
              <img
                class=" object-center rounded-lg "
                src="https://doodleipsum.com/600/outline?i=c03e7275e5d70c0305b16230cb66f01c"
                alt="Picture of the author"
              />
            </div>
            <div className="col-span-2 p-3 rounded text-7xl font-itim">Front End</div>
            <div className="col-span-4 p-3 rounded text-7xl">
              <Image
                class=" object-center rounded-lg "
                src={javascript}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={react}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={firebase}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={react}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={firebase}
                alt="Picture of the author"
              />
            </div>

            <div className="col-span-2 p-3 rounded text-7xl font-itim">
              Backend
              <div className="p-3 rounded text-7xl">
                <Image
                  class=" object-center rounded-lg "
                  src={javascript}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />
              </div>
            </div>

            <div className="col-span-2 p-3 rounded text-7xl font-itim">
              Cloud
              <div className="p-3 rounded text-7xl">
                <Image
                  class=" object-center rounded-lg "
                  src={javascript}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="col-span-2 p-3 rounded text-7xl font-itim">
              Extension
              <div className="p-3 rounded text-7xl">
                <Image
                  class=" object-center rounded-lg "
                  src={javascript}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={react}
                  alt="Picture of the author"
                />{" "}
                <Image
                  class=" object-center rounded-lg "
                  src={firebase}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="col-span-4 p-3 rounded text-7xl font-itim">Recent Focus</div>
           
            <div className="col-span-4 p-3 rounded text-7xl">
              <Image
                class=" object-center rounded-lg "
                src={javascript}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={react}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={firebase}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={react}
                alt="Picture of the author"
              />{" "}
              <Image
                class=" object-center rounded-lg "
                src={firebase}
                alt="Picture of the author"
              />
            </div>
          </div>

        </Container>
      </Layout>
    </>
  );
}
