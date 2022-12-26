// import React from 'react'
// import Announcement from '../testcomponents/single/Announcement'
// import Profile from '../components/single/Profile'
// import {Scholarships}  from '../components/flip_card/Scholarships'
import React from "react";
// JSX
// import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
// import Navbar from "./UI/Navbar/Navbar";
// import Wrapper from "./UI/Wrapper/Wrapper";
// import Title from "./UI/Title/Title";
// import Subtitle from "./UI/Subtitle/Subtitle";

// import BasicSlider from "./testcomponents/BasicSlider/BasicSlider";
// import VerticalSlider from "./testcomponents/VerticalSlider/VerticalSlider";
// import ZoomSlider from "./testcomponents/ZoomSlider/ZoomSlider";
// import SlidesChildrenSlider from "./testcomponents/SlidesChildrenSlider/SlidesChildrenSlider";
// import BlendModeSlider from "./testcomponents/BlendModeSlider/BlendModeSlider";
// import NavbarSlider from "./testcomponents/NavbarSlider/NavbarSlider";
// import ButtonsSlider from "./testcomponents/ButtonsSlider/ButtonsSlider";
// import AutoplayButtonSlider from "./testcomponents/AutoplayButtonSlider/AutoplayButtonSlider";

// Images
// const kyoto = "https://i.imgur.com/xw5Abku.jpg";
// const tenryuJiTemple = "https://i.imgur.com/g5JNdYL.jpg";
// const hakone = "https://i.imgur.com/Iq6XtFR.jpg";
// const byodoInTemple = "https://i.imgur.com/le9OeEC.jpg";
// import {Carousel} from '3d-react-carousal';
// import dynamic from "next/dynamic";

import FootertTwo from "../layout/Footer/FooterTwo";
import Footer from "../layout/Footer/Footer";
import AnimatedContent from "../components/animations/AnimatedContent";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const test = () => {
  // const Carousel = dynamic(() => import("3d-react-carousal"), { ssr: false });

  // let slides = [
  //   <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  //   <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  //   <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  //   <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  //   <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
  return (
    <>
      {/* <Profile/> */}
      {/* <Scholarships/> */}

      {/* <Profile/> */}
      {/* <div
      style={{
        color: "#FFF"
      }}
    >
      <NavbarSlider />
    </div> */}

      {/* <Carousel slides={slides} autoplay={true} interval={1000}/> */}
      {/* <div class="hero-container">
    <div class="hero-body">
      <h1>Hero Image</h1>
      <span>Efecto hero image</span>
      <div class="form">
        <input type="text" />
    <button>Buscar</button>
      </div>
      
    </div>
  </div>
     */}

      {/* <FootertTwo/> */}

      {/* <AnimatedContent/> */}

      {/* <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Front</div>
          <div class="flip_back">Back!</div>
        </div>
      </div> */}

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Front</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">sds</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Fasaront</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Fsddront</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Frsdsont</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">Frsdsont</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
  <div style={{marginLeft:"2%",marginRight:"2%"}}>
        <div class="flip_card">
        <div class="flip_content">
          <div class="flip_front">sdsd</div>
          <div class="flip_back">Back!</div>
        </div>
      </div>
  </div>
</Carousel>;

    </>
  );
};

export default test;

// import React from "react";
// // JSX
// import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
// import Navbar from "./UI/Navbar/Navbar";
// import Wrapper from "./UI/Wrapper/Wrapper";
// import Title from "./UI/Title/Title";
// import Subtitle from "./UI/Subtitle/Subtitle";

// // Images
// const kyoto = "https://i.imgur.com/xw5Abku.jpg";
// const tenryuJiTemple = "https://i.imgur.com/g5JNdYL.jpg";
// const hakone = "https://i.imgur.com/Iq6XtFR.jpg";
// const byodoInTemple = "https://i.imgur.com/le9OeEC.jpg";

// export const test = () => {
//   return (
//     <HeroSlider
//       slidingAnimation="top_to_bottom"
//       orientation="vertical"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) =>
//         console.log("onBeforeChange", previousSlide, nextSlide)
//       }
//       onChange={(nextSlide) => console.log("onChange", nextSlide)}
//       onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
//       style={{
//         backgroundColor: "#000"
//       }}
//       settings={{
//         slidingDuration: 400,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: false,
//         autoplayDuration: 8000,
//         height: "100vh"
//       }}
//     >
//       <Navbar />
//       <OverlayContainer>
//         <Wrapper>
//           <Title>Navbar Slider</Title>
//           <Subtitle>Cool stuff.</Subtitle>
//         </Wrapper>
//       </OverlayContainer>

//       <Slide
//         shouldRenderMask
//         navDescription="Kyoto - Japan"
//         background={{
//           backgroundColor: "#6D9B98",
//           backgroundImage: kyoto
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         navDescription="Tenryu-ji Temple - KyÅto-shi - Japan"
//         background={{
//           backgroundColor: "#8A8A8A",
//           backgroundImage: tenryuJiTemple
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         navDescription="Hakone - Japan"
//         background={{
//           backgroundColor: "#EA2329",
//           backgroundImage: hakone
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         navDescription="Byodo-In Temple - Kaneohe - United States"
//         background={{
//           backgroundColor: "#2D7791",
//           backgroundImage: byodoInTemple
//         }}
//       />

//       <MenuNav />
//     </HeroSlider>
//   );
// };
// // export default test;
