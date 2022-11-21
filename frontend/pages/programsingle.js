import React from "react";
import { ProgramHeader } from "../components/program/ProgramHeader";
import { ProgramBody } from "../components/program/ProgramBody";
import { Gallery } from "../components/card/Gallery";
import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";




export default function programSingle() {
    return (
      <>
        <Header/>
       <div className="container">
       {/* Bachelor of Business Administration (Program header) */}
       <ProgramHeader /> 

       {/* About program  */}
       {/* eligibility criteria */}
       {/* fee strcuire */}
       {/* schema  */}
       {/* apply online */}
       <ProgramBody/>
       <Gallery/>
       </div>
       <Footer/>
      </>
    );
  }
  
