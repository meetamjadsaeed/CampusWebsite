import React from "react";
// import { Carousel } from "antd";
import { Image } from "antd";
import { Card, Col, Row } from "antd";
import { Button, Space } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import Marquee from "react-easy-marquee";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
];

const Scholarships = () => {
  return (
    <>
      <Card
        title="Scholarships /Financial Ad"
        extra={
          <a href="#">
            <Button type="">Make a Donation</Button>
          </a>
        }
        style={{ marginTop: "5%" }}
      >
        <div>
          <Marquee
            duration={7000}
            background="#ffffff"
            height="100px"
            width="100%"
            axis="X"
            align="center"
            pauseOnHover={true}
            reverse={true}
          >
            {images.map((image) => (
              <img src={image} alt="picsum" style={{ borderRadius: "10px" }} />
            ))}
          </Marquee>
        </div>
      </Card>
    </>
  );
};

export default Scholarships;
