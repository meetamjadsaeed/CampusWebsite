import React from 'react'
import { useRouter } from 'next/router'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../../layout/Header/Header";
import FooterTwo from "../../layout/Footer/FooterTwo";

const event = () => {
    const router = useRouter()
const { pid } = router.query

const [Event, setEvent] = useState();
    const getData = async () => {
      // Get Posts
      await axios
        .get( `${process.env.NEXT_PUBLIC_BACKEND_API}campus/${pid}`)
        .then((result) => setEvent(result.data))
    //   .then((result) => console.log(result.data.title));
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });
    };
  
    useEffect(() => {
      getData();
    }, []);

  return (
    <>
    <Header/>
       <header className="hero">
        <div className="hero-text">
          <h1>Event</h1>
          {/* <p>Details</p> */}
        </div>
        <a href="#blogPost-header" className="hero-arrow">
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </header>

      <div className="container">
        <p className='hero-description'>
        description description
        </p>
      </div>
      <FooterTwo/>

    </>
    
  )
}

export default event;