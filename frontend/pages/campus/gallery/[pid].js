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

  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://iba-kdk.com/wp-json/wp/v2/campus?atcampus=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setfullGallery(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />

      <div className="container">
        <Breadcrumb style={{ marginTop: 16 }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">All Profiles</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Profiles By Department</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row gutter={90} style={{ padding: "10px" }}>
          {fullGallery ? (
            fullGallery.map((item) => {
              return (
                
                <Col span={6} style={{ marginBottom: "16px" }}>
                  <Image
                    // width={80}
                    // height={80}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
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