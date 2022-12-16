import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { Card, Col, Row } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Player } from "video-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";

const Gallery = () => {
  const [Gallery, setGallery] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setGallery(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row gutter={100} style={{ marginTop: "16px" }}>
        <Col span={24}>
          <Card title="Campus Life" bordered={true} style={{ width: "auto" }}>
            <Row gutter={90} style={{ padding: "10px" }}>
              {Gallery ? (
                Gallery.map((item) => {
                  return (
                    <Col span={3}>
                      <Image
                        width={80}
                        height={80}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    </Col>
                  );
                })
              ) : (
                <p>loading...</p>
              )}
            </Row>
          </Card>
          {/* <div>
            <p>Pioneer Batch 2018 - Our Alumni</p>
            <p>"We are very lucky to have this campus in our Kandhkot city"</p>
          </div>
          <button className="">View all</button> */}
        </Col>
        {/* <Col span={10}>
          <Card title="Campus tour" bordered={true} style={{ width: "auto" }}>
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

export default Gallery;
