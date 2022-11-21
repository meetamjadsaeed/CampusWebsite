import React from "react";
import { ProgramHeader } from "../components/program/ProgramHeader";
import { ProgramBody } from "../components/program/ProgramBody";
import { Gallery } from "../components/card/Gallery";
import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";




export default function program() {
    return (
      <>
        <Header/>
       <div className="container">
       <ProgramHeader />
       <ProgramBody/>
       <Gallery/>
       </div>
       <Footer/>
      </>
    );
  }
  
