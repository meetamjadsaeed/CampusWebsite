import React from "react";
import Slider from "../components/slider/MainSlider";
import AnimatedContent from "../components/animations/AnimatedContent";
import { Button, Form, Radio, TreeSelect } from "antd";
import { Player } from "video-react";
import Programs from "../components/card/Programs";
import GlobalSlider from "../Assets/Styles/slider/GlobalSlider";

const MainHero = ({ data }) => {
  return (
    <>
      {!data.content ? (
        <div class="container" style={{ paddingTop: "10%" }}>

          <GlobalSlider
            globalSlider={{
              endpoints: "campus?pin_board=34",
              rgba1: "rgb(0 0 0 / 0%)",
              rgba2: "rgb(0 1 0 / 40%)",
              // imageUrl: "https://picsum.photos/300/300/?random=",
              flip_back_bg: "#ea6645",
              flip_back_color: "#ffffff",
              titleDisplay: false,
              contentDisplay: true,
            }}
          />
        </div>
      ) : null}

      <div class="hero-container">
        <div class="hero-body">
          {/* <h1 style={{ color: "#ffffff" }}>SIBA KDK Campus</h1> */}

          {
            data.content ? (
              <AnimatedContent
                data={{
                  name: data.content,
                }}
              />
            ) : null
            // <Programs/>
            // <p>asas</p>
          }

          {/* <div className="hero-video"> */}
          {data.videoUrl ? (
            <Player
              // playsInline
              // fluid={true}
              // height={"100vh"}
              // style={{height:"100vh"}}
              autoPlay={true}
              // muted={true}
              // aspectRatio="16:9"
              startTime
              poster="https://i.ytimg.com/vi/Rq5SEhs9lws/maxresdefault.jpg"
              src={data.videoUrl}
            />
          ) : null}

          {/* <p>sasa</p> */}

          {/* <Button>Details</Button> */}
          {/* <span className="hero-span">Find, What You Want</span> */}
          {/* <div class="form" style={{ marginTop: "2%" }}>
            <input className="hero-input" type="text" />
            <button>Search</button>
          </div> */}
          {/* <Slider/> */}
        </div>
      </div>

      {/* </div> */}

      <div class="fixed-bg"></div>
    </>
  );
};

export default MainHero;
