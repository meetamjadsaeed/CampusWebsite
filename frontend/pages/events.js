import React from "react";
import Header from "../layout/Header/Header";
import FooterTwo from "../layout/Footer/FooterTwo";
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

// regex for removing the html tags 
const regex = /(<([^>]+)>)/ig;

const events = () => {
  const [Departments, setDepartments] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=13", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setDepartments(result.data))
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
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Events</a>
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
  <h1 className="page-title">Events</h1>
    <Row gutter={16} style={{ marginTop: "30px"}}>
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
                  cover={<img alt="example" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />}
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                  className="event-card"
                >
                  <Meta
                    avatar={<Avatar src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />}
                    title={item["title"]["rendered"]}
                    description= {item["content"]["rendered"].replace(regex, '')}
                  />
                </Card>
              </Link>
            </Col>
          );
        })
      ) : (
        <Spin />
      )}
      {/* <Col span={8}>
  <Link href="/program/1">
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://sandpipercomms.com/wp-content/uploads/2021/08/shutterstock_1932042689-scaled.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </Link>
</Col>
<Col span={8}>
  <Link href="#">
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://sandpipercomms.com/wp-content/uploads/2021/08/shutterstock_1932042689-scaled.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </Link>
</Col> */}
    </Row>
  </div>
</div>

<FooterTwo />
    </>
  );
};

export default events;
