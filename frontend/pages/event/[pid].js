import React from 'react'
import { useRouter } from 'next/router'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

const event = () => {
    const router = useRouter()
const { pid } = router.query

const [Event, setEvent] = useState();
    const getData = async () => {
      // Get Posts
      await axios
        .get( `https://dummyjson.com/products/${pid}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => setEvent(result.data));
    //   .then((result) => console.log(result.data.title));
    };
  
    useEffect(() => {
      getData();
    }, []);

  return (
    <>
    <Header/>
       <header className="hero">
        <div className="hero-text">
          <h1>{Event &&  Event.title}</h1>
          {/* <p>Details</p> */}
        </div>
        <a href="#blogPost-header" className="hero-arrow">
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </header>

      <div className="container">
        <p className='hero-description'>
        {Event &&  Event.description}
        </p>
      </div>
      <Footer/>

    </>
    
  )
}

export default event;