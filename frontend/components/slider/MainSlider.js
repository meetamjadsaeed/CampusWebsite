import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import styles from "../../Assets/Styles/slider/Slider.module.css"

// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   background: "#364d79",
//   width:'700px',
// };

const contentStyle = {
  margin: 0,
  height: "400px",
  color: "#fff",
  // lineHeight: "260px",
  // textAlign: "center",
  // background: '#364d79',
  // background:URL('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  backgroundImage:
    "url(" +
    "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" +
    ")",
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    border: '10px solid #51484847',
    display: 'flex',
    alignItems: 'flex-start',
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

export const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
     
        <Carousel afterChange={onChange} style={{marginTop: "5%"}}>
          <div>
            <div style={contentStyle}>
              <div style={content} >
                <h1 style={{ color: "#fff", marginLeft: "2%" }}>
                  Sukkur IBA University Kandhkot Campus
                </h1>
                <p style={{ color: "#fff", marginLeft: "2%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipis
                </p>
              </div>
            </div>
          </div>

          <div>
            <div style={contentStyle}>
              <div style={content}>
                <h1 style={{ color: "#fff", marginLeft: "2%" }}>
                  Sukkur IBA University Kandhkot Campus
                </h1>
                <p style={{ color: "#fff", marginLeft: "2%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipis
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <div style={content}>
                <h1 style={{ color: "#fff", marginLeft: "2%" }}>
                  Sukkur IBA University Kandhkot Campus
                </h1>
                <p style={{ color: "#fff", marginLeft: "2%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipis
                </p>
              </div>
            </div>
          </div>
        </Carousel>
    </>
  );
};
