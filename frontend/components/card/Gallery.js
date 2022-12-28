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
  const [imagebyCat, setimageCat] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?atcampus=36`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setGallery(result.data))
      // .then((result) => console.log(result));
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

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?atcampus=36`)
      .then((response) => response.json())
      // .then((result) => console.log(result.json()));
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
      })
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
      })
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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row gutter={100} style={{ marginTop: "16px" }}>
        <Col span={24}>
          <Card title="Campus Life" bordered={true} style={{ width: "auto" }}>
            <Row gutter={[16, 40]} style={{ padding: "10px" }}>
              {Gallery ? (
                Gallery.map((item) => {
                  return (
                    <Col
                      xs={12}
                      sm={8}
                      md={6}
                      lg={4}
                      xl={4}
                      style={{ marginBottom: "16px" }}
                    >
                      {imagebyCat ? (
                        imagebyCat.map((featuredImage) => {
                          // console.log(item);
                          if (item.featured_media === featuredImage.id) {
                            return (
                              <Image
                                // width={80}
                                // height={80}
                                src={
                                  featuredImage
                                    ? featuredImage.guid.rendered
                                    : null
                                }
                              />
                            );
                          }
                        })
                      ) : (
                        <Spin />
                      )}
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
