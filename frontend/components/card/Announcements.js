import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import Marquee from "react-easy-marquee";

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
  const [imagebyCat, setimageCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setAnnouncements(result.data))
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
        console.log('Error', error.message);
      }
  
    });

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?pin_board=35`)
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
          console.log('Error', error.message);
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
          console.log('Error', error.message);
        }
    
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card title="Annoucements" bordered={true}>
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
          {Announcements ? (
            Announcements.map((item) => {
              return (
                <Link href={`/boardbypin/pin/${item.id}`}>
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                     avatar={
                      imagebyCat ? (
                        imagebyCat.map((featuredImage) => {
                          // console.log(item);
                          if (item.featured_media === featuredImage.id) {
                            return (
                              <Image
                                width={50}
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
                      )
                    }
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

export default Announcements;
