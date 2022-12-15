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
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
  "https://picsum.photos/100",
];

const Scholarships = () => {
  const [Scholarships, setScholarships] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setScholarships(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);
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
             {Scholarships ? (
                Scholarships.map((item) => {
                  return (
             <img src="https://picsum.photos/200" alt="picsum" style={{ borderRadius: "10px" }} />
             );
            })
          ) : (
            <p>loading...</p>
          )}
            {/* {images.map((image) => (
              <img src={image} alt="picsum" style={{ borderRadius: "10px" }} />
            ))} */}
          </Marquee>
        </div>
      </Card>
    </>
  );
};

export default Scholarships;
