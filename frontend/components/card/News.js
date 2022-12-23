import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";

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
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=14", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setNews(result.data));
      // .then((result) => console.log(result.data[0]["_links"]["wp:featuredmedia"][0]["href"]));
      // .then((result) => console.log(result.data[0]["date"]));
  };

  useEffect(() => {
    getData();
  }, []);

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
                  <Link href={`/event/${item.id}`}>
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                      avatar={<Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
                      title={item["title"]["rendered"]}
                      description={item["date"]}
                    />
                  </Card>
                </Link>
                );
              })
            ) : (
              <p>loading...</p>
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
