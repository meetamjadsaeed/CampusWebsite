import React from "react";
import Header from "../layout/Header/Header";
import FooterTwo from "../layout/Footer/FooterTwo";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { Spin } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Select } from "antd";
import FeaturedImage from "../components/meta/FeaturedImage";


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const admissions = () => {
  const [admissions, setadmissions] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}admissions`)
      .then((result) => setadmissions(result.data))
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
  };

  useEffect(() => {
    getData();
  });
  return (
    <>
      <Header />

      <div className="container">
        <Breadcrumb style={{ marginTop: 16 }}>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/admissions">Admissions</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "space-around",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          {/* <Button type="">Admission process</Button> */}
          {/* <Button type="">Fee Structure</Button> */}
          {/* <Button type="">Apply Online</Button> */}
        </div>

        <div className="site-card-wrapper">
          {/* <h1 className="page-title">All Profiles</h1> */}

          <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
            {admissions ? (
              admissions.map((item) => {
                // console.log(item);
                return (
                  <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
                    <Link href={`department/${item.id}`}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <FeaturedImage
                            PropsData={{
                              featuredImage: item && item.featured_media,
                              className: "",
                            }}
                          />
                        }
                      >
                        <Meta
                          title={item.name}
                          // description="www.instagram.com"
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })
            ) : (
              <Spin />
            )}
          </Row>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default admissions;
