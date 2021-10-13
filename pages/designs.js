import Container from "../components/container";
import Layout from "../components/layout";
import React from "react";
import Head from "next/head";

function Designs() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Container>
          <div className="grid grid-cols-3 mb-16 mt-4">
            <div className="col-span-3 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Designs
            </div>
            <div className="col-span-3">
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  height: "100vh",
                  width: "80vw",
                  borderRadius: "20px",
                  background: "#cacaca",
                }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDYU1CGwAO8vfrlCJbMEYkI%2FE-commerce-Design-Workshop%3Fnode-id%3D0%253A1"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default Designs;
