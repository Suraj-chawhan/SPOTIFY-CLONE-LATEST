"use client";

import React, { useEffect, useState } from 'react';
import HomeUi from '../../Component/HomeUi';
import { useRouter } from 'next/navigation';
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Three from '../../Component/Three/Three';
import Model from '../../Component/Three/Venom.js';
import styles from "./page.module.css"
export default function Home() {

  const [music, setMusic] = useState([]);
  const router = useRouter();


  useEffect(() => {
   
      async function fetchMusic() {
        try {
          const response = await fetch('/api/banner');
          if (!response.ok) throw new Error('Failed to fetch music data');
          const data = await response.json();
          setMusic(data);
        } catch (error) {
          console.error('Error fetching music data:', error);
        }
      }

      fetchMusic();
  
  },[] )


  

  return (
    <div style={{backgroundColor:"#444444",width:"100%"}}>
      <Navbar/>
      <div style={{display:"flex",justifyContent:'space-around',flexWrap:"wrap",width:"fit"}}>
        <div className={styles.container}>
      <h3>Punjabi Music</h3>
      <div style={{display:"flex",overflowX:"auto"}}>
        <HomeUi music={music} song="punjabi" />
      </div>
      <h3>Hollywood Music</h3>
      <div style={{display:"flex",overflowX:"auto"}}>
        <HomeUi music={music} song="hollywood" />
      </div>
      <h3>Bollywood Music</h3>
      <div style={{display:"flex",overflowX:"auto"}}>
        <HomeUi music={music} song="bollywood" />
      </div>
      <h3>Rap Music</h3>
      <div style={{display:"flex",overflowX:"auto"}}>
        <HomeUi music={music} song="rapper" />
      </div>
      </div>
      <Three Model={Model} styleCanvas={{height:1000,margin:"10px 30px 0px 0px"}}/>
      </div>
      <br />
      <Footer/>
    </div>
  );
}
