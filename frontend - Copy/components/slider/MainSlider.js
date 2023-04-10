import React from "react";
import { Image } from "antd";
import styles from "../../Assets/Styles/slider/Slider.module.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   background: "#364d79",
//   width:'700px',
// };

const contentStyle = {
  // margin: 0,
  // height: "400px",
  // color: "#fff",
  // // lineHeight: "260px",
  // // textAlign: "center",
  // // background: '#364d79',
  // // background:URL('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  // backgroundImage:
  //   "url(" +
  //   "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" +
  //   ")",
  // flexDirection: "column",
  // alignContent: "flex-start",
  // justifyContent: "flex-end",
  // display: "flex",
  // alignItems: "flex-start",
  marginTop: "5%",
};

const parentStyles = {
  border: "10px solid #51484847",
};

const content = {
  lineHeight: "0.7",
  backgroundColor: "#000000b0",
  padding: "10px",
  width: "50%",
};

const displayFlex = {
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-end",
  alignItems: "flex-start",
};

const Slider = () => {
  return (
    <>
      <div styles={contentStyle}>
        <Carousel
          axis="vertical"
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          infiniteLoop={true}
          showThumbs={true}
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          autoFocus={false}
          thumbWidth={100}
          selectedItem={0}
          interval={2000}
          transitionTime={500}
          // swipeScrollTolerance = {5}
        >
          <div>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
