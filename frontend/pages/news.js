import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";

import qs from "qs";

const news = () => {
  const [Departments, setDepartments] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("   https://dummyjson.com/products  ", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setDepartments(result.data.products));
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
            <a href="">News</a>
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
    <h1>News</h1>

          <Row gutter={16} style={{ marginTop: "50px", marginBottom: "50px" }}>
            {Departments ? (
              Departments.map((item) => {
                // console.log(item);
                return (
                  <Col span={8}
                  style={{marginBottom: '50px'}}
                  >
                    <Link href={`event/${item.id}`}>
                      <Card
                        style={{
                          width: 300,
                        }}
                        cover={<img alt="example" src={item.thumbnail} />}
                        // actions={[
                        //   <SettingOutlined key="setting" />,
                        //   <EditOutlined key="edit" />,
                        //   <EllipsisOutlined key="ellipsis" />,
                        // ]}
                        className="news-card"
                      >
                        <Meta
                          avatar={<Avatar src={item.thumbnail} />}
                          title={item.title}
                          description={item.description}
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

      <Footer />
    </>
  );
};

export default news;
