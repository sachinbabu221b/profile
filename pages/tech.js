import { useRouter } from "next/router";
import Container from "../components/container";
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
        <Container>
          <div className="grid grid-cols-4 gap-2 mb-10">
            <div className="col-span-4 text-6xl sm:text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Tech Stack
            </div>

            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
            <div className="col-span-4 p-3 rounded">
              <Cards />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
