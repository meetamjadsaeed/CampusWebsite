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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Events = () => {
  const [Events, setEvents] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("   https://dummyjson.com/products  ", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setEvents(result.data.products));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card title="Events title" bordered={true}>
        <Carousel
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
          {Events ? (
            Events.map((item) => {
              return (
                <div>
                  <Link href={`/event/${item.id}`}>
                    <Card style={{ width: 300, marginTop: 16 }}>
                      <Meta
                        avatar={<Image width={50} src={item.thumbnail} />}
                        title={item.title}
                        description="March 12, 2020"
                      />
                    </Card>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </Carousel>
      </Card>
    </>
  );
};

export default Events;
