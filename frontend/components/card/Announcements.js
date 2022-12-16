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

const Announcements = () => {
  const [Announcements, setAnnouncements] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setAnnouncements(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card title="Announcements title" bordered={true}>
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
          {Announcements ? (
            Announcements.map((item) => {
              return (
                <div>
                  <Link href="#">
                    <Card style={{ width: 300, marginTop: 16 }}>
                      <Meta
                        // avatar={<Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
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
        </Carousel>
      </Card>
    </>
  );
};

export default Announcements;
