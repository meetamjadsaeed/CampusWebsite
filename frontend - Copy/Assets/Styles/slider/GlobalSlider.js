import React, { useEffect } from "react";
import { Card } from "antd";
import ReactDOM from "react-dom";
import { Col, Row } from "antd";
import { Image } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import Marquee from "react-easy-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GlobalSliderMeta from "./GlobalSliderMeta";


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


const { Meta } = Card;

// const styles = {
//   padding: "13px",
// };

const contentStyle = {
  margin: 0,
  height: "400px",
  color: "#fff",
  // lineHeight: "260px",
  // textAlign: "center",
  // background: '#364d79',
  // background:URL('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  // backgroundImage:
  //   "url(" +
  //   "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" +
  //   ")",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-end",
  // border: "10px solid #51484847",
  backgroundColor: "#fff",
  padding: "50px",
};

const content = {
  lineHeight: "0.7",
  backgroundColor: "#00000030",
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

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;


const GlobalSlider = ({ globalSlider }) => {
  const [GlobalSlider, setGlobalSlider] = useState();
  const [imagebyCat, setimageCat] = useState();


  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}${globalSlider.endpoints ? globalSlider.endpoints : null}`)
      .then((result) => setGlobalSlider(result.data));
    // .then((result) => console.log(result));

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?admissions=38`)
      .then((response) => response.json())
      // .then((result) => console.log(result.json()));
      .then((images) => {
        const respones = images.map(
          (image) =>
            fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_API}media/${image.featured_media}`
            ).then((res) => res.json())
          // .then((res) => console.log(res.json())),
        );
        Promise.all(respones).then((fetchedImgaes) => {
          setimageCat(fetchedImgaes);
          // setIsLoading(false)
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {GlobalSlider ? (
            GlobalSlider.map((item) => {
              return (
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>

                  <GlobalSliderMeta

                    propsData={
                      {
                        featuredImage: item.featured_media,
                        title: item["title"]["rendered"],
                        content: item["content"]["rendered"],
                        backgroundColor: globalSlider.flip_back_bg ? globalSlider.flip_back_bg : "#012447",
                        color: globalSlider.flip_back_color ? globalSlider.flip_back_color : "#ffffff",
                        rgba1: globalSlider.rgba1 ? globalSlider.rgba1 : "rgba(0, 0, 0, 0.86)",
                        rgba2: globalSlider.rgba2 ? globalSlider.rgba2 : "rgba(0, 0, 0, 0.86)",

                      }
                    }
                  />

                </div>

                // </p>
              );
            })
          ) : (
            <Spin />
          )}
        </Carousel>
      </div>


    </>

    // <>
    //   <div style={{ marginBottom: "50px" }}>
    //     <Carousel
    //       autoPlay={true}
    //       infiniteLoop={true}
    //       interval={2000}
    //       transitionTime={500}
    //       showArrows={false}
    //       showStatus={false}
    //       showIndicators={false}
    //       showThumbs={false}
    //       dynamicHeight={false}
    //       axis={"vertical"}
    //     >
    //       {Programs ? (
    //         Programs.map((item) => {
    //           return (
    //             <div>
    //               <div style={contentStyle}>
    //                 <Link href={`program/${item.id}`}>
    //                   <Row gutter={0}>
    //                     <Col
    //                       xs={24}
    //                       sm={24}
    //                       md={12}
    //                       lg={12}
    //                       xl={12}
    //                       style={{
    //                         boxShadow: "0 2px 10px 0 rgb(45 60 75 / 10%)",
    //                         border: "1px solid #e8e8e8",
    //                         borderRadius: "5px",
    //                         background: "#fff",
    //                         padding: "20px",
    //                       }}
    //                     >
    //                       <h3>{item["title"]["rendered"]}</h3>
    //                       <p>
    //                         {item["content"]["rendered"].replace(regex, "")}
    //                       </p>
    //                       <Button>
    //                         View Details <ArrowRightOutlined />
    //                       </Button>
    //                     </Col>
    //                     <Col xs={24} sm={24} md={12} lg={12} xl={12}>
    //                       <Image
    //                         width="50%"
    //                         height={200}
    //                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    //                       />
    //                     </Col>
    //                   </Row>
    //                 </Link>
    //               </div>
    //             </div>
    //           );
    //         })
    //       ) : (
    //         <Spin />
    //       )}
    //     </Carousel>
    //   </div>
    // </>
  );
};

export default GlobalSlider;
