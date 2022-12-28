import React from "react";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { Spin } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Select } from "antd";
import { Image } from "antd";

import Header from "../../../layout/Header/Header";
import FooterTwo from "../../../layout/Footer/FooterTwo";
import { useRouter } from "next/router";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const fullGallery = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [fullGallery, setfullGallery] = useState();
  const [imagebyGallery, setimagebyGallery] = useState();


  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?atcampus=${pid}`)
      .then((result) => setimagebyGallery(result.data))
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
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />

      <div className="container">
      <Breadcrumb style={{ marginTop: 16 }}>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
          <Link href="/campus">Life At Campus</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="">{pid}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={90} style={{ padding: "10px" }}>
          {fullGallery ? (
            fullGallery.map((item) => {
              return (
                
                <Col span={6} style={{ marginBottom: "16px" }}>
                  {
                          imagebyGallery ? (
                            imagebyGallery.map((featuredImage) => {
                              // console.log(item);
                              if (item.featured_media === featuredImage.id) {
                                return (
                                  <Image
                                  // width={80}
                                  // height={80}
                                  src=
                                  {
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
               
                  {/* <Link href={`gallerysingle/${item.slug}`}>
                  <Button>Veiw</Button>
                  </Link> */}
                </Col>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </Row>
      </div>

      <FooterTwo />
    </>
  );
};

export default fullGallery;
