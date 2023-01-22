import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import GroupMeta from "./GroupMeta";


const { Meta } = Card;
// import { Image } from "antd";
// import { Col, Row } from "antd";
// import { Image } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Marquee from "react-easy-marquee";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
];

const News = () => {
  const [News, setNews] = useState();
  const [imagebyCat, setimageCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?pin_board=33`)
      .then((result) => setNews(result.data))
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
          console.log("Error", error.message);
        }
      });
    // .then((result) => console.log(result.data[0]["_links"]["wp:featuredmedia"][0]["href"]));
    // .then((result) => console.log(result.data[0]["date"]));

  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Card title="News" bordered={true}>
        <Marquee
          duration={15000}
          background="#ffffff"
          height="100px"
          width="100%"
          axis="Y"
          align="center"
          pauseOnHover={true}
          reverse={true}
        >
          {News ? (
            News.map((item) => {
              return (
                <Link href={`/boardbypin/pin/${item.id}`}>
                  <Card style={{ width: 300, marginTop: 16 }}>

                    <GroupMeta
                      propsData={
                        {
                          title: item["title"]["rendered"],
                          date: item["date"],
                          featuredImage: item["featured_media"],
                        }
                      }
                    />

                  </Card>
                </Link>
              );
            })
          ) : (
            <Spin />
          )}
          {/* {images.map((image) => (
              <img src={image} alt="picsum" style={{ borderRadius: "10px" }} />
            ))} */}
        </Marquee>
        {/* <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          transitionTime={500}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          dynamicHeight={false}
          axis={"vertical"}
        >
          {News ? (
            News.map((item) => {
              return (
                <div>
                  <Link href={`/event/${item.id}`}>
                    <Card style={{ width: 300, marginTop: 16 }}>
                      <Meta
                        avatar={<Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
                        title={item["title"]["rendered"]}
                        description={item["date"]}
                      />
                    </Card>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </Carousel> */}
      </Card>
    </>
  );
};

export default News;
