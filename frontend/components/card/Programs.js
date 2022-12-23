import React, { useEffect } from "react";
import { Card } from "antd";
import { ProgramsSlider } from "../slider/ProgramsSlider";
import styles from "./Programs.module.css";
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
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import Marquee from "react-easy-marquee";
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

const Programs = () => {
  const [Programs, setPrograms] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=16", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setPrograms(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Row style={{ marginTop: "5%"}}>
        <Marquee
          duration={15000}
          background="#ffffff"
          height="300px"
          width="100%"
          axis="X"
          align="center"
          pauseOnHover={true}
          reverse={true}
        >
          {Programs ? (
            Programs.map((item) => {
              return (
                <Link href={`/event/${item.id}`}>
                  <Col>
                    <p>Heading</p>
                  </Col>
                  <Col>
                    <p>Image</p>
                  </Col>
                </Link>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </Marquee>
      </Row>
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

export default Programs;
