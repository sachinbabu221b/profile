import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Particles from "react-particles-js";

// import {ParticlesContainer} from '../components/particle'
function Designs() {
  const router = useRouter();
  // useEffect(() => {
  //   async function getMediumFeed() {
  //     try {
  //       axios.get("https://medium.com/feed/@sachinbabu6174", { 'headers': {  'Access-Control-Allow-Origin': '*'} })
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //     } catch (e) {
  //       console.log(`e`, e)
  //     }
  //   }
  //   getMediumFeed();

  // }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Sachin</title>
        </Head>
        <Container>
          {/* <Intro /> */}

          <div className="grid grid-cols-3 mb-16 mt-4">
            <div className="col-span-3 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 font-nunito">
              Designs
            </div>
            {/* <div className="col-span-3 text-2xl text-left  font-nunito">
              Designs in figma
            </div> */} 
            <div className="col-span-3">
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  height: "100vh",
                  width: "80vw",
                  borderRadius: '20px',
                  background: '#cacaca'
                }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDYU1CGwAO8vfrlCJbMEYkI%2FE-commerce-Design-Workshop%3Fnode-id%3D0%253A1"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Container>
      </Layout>

      {/* <ParticlesContainer> */}

      {/* </ParticlesContainer> */}
    </>
  );
}
// Designs.getInitialProps =

//   async function() {
//     // fetch('https://api.tvmaze.com/search/shows?q=batman')
//     // const data = await res.json()
//   // const res = await axios.get('https://medium.com/feed/@sachinbabu6174')
//   // const data = await parser('https://medium.com/feed/@sachinbabu6174')
//   // console.log(`Show data fetched. Count: ${res}`)

//   // return {
//   //   data: data
//   // }
// }
export default Designs;
