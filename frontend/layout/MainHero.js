import React from "react";
import Slider from "../components/slider/MainSlider";
import AnimatedContent from "../components/animations/AnimatedContent";
import { Button, Form, Radio, TreeSelect } from "antd";


const MainHero = ({data}) => {
  return (
    <>
      <div class="hero-container">
        <div class="hero-body">
          {/* <h1 style={{ color: "#ffffff" }}>SIBA KDK Campus</h1> */}
          <AnimatedContent
          data={{ 
            name:data.content,
        }}
          />
           {/* <Button>Details</Button> */}
          {/* <span className="hero-span">Find, What You Want</span> */}
          {/* <div class="form" style={{ marginTop: "2%" }}>
            <input className="hero-input" type="text" />
            <button>Search</button>
          </div> */}
          {/* <Slider/> */}
        </div>
      </div>

      <div class="fixed-bg">
        
      </div>

    </>
  );
};

export default MainHero;
