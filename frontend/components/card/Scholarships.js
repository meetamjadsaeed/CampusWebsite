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
  const [imagebyCat, setimageCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?scholarships=29`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setScholarships(result.data))
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

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?scholarships=29`)
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
                  <img
                    src={
                      imagebyCat ? (
                        imagebyCat.map((featuredImage) => {
                          // console.log(item);
                          if (item.featured_media === featuredImage.id) {
                            return (
                              // width={80}
                              // height={80}

                              featuredImage ? featuredImage.guid.rendered : null
                            );
                          }
                        })
                      ) : (
                        <Spin />
                      )
                    }
                    alt="picsum"
                    style={{
                      borderRadius: "10px",
                      margin: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  // <p>
                  //   {item._links['wp:featuredmedia']}
                  // </p>
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
