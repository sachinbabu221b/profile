import { useRouter } from "next/router";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Content from "../components/content";
import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Parser from "rss-parser";
import Particles from 'react-particles-js';

// import {ParticlesContainer} from '../components/particle'
const parser = new Parser();
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
          <div >
       
  </div>
          <Intro />
          <img
            src="https://doodleipsum.com/200/hand-drawn?i=8a0019965b55aaea398f600a4837f637"
            alt="Picture of the author"
          />

          <div className="grid grid-cols-3  mb-10 bg-gray-300">
            <div className="col-span-3  max-h-screen bg-cover  bg-no-repeat bg-linkedin h-72 pt-56  pl-16 text-6xl font-medium">
              Sachin Babu
            </div>
            <div className="col-span-3">Mind stone</div>
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
export default  Designs