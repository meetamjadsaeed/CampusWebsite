import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Spin } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Select } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;
const faculty = () => {
  const [Faculty, setFaculty] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("   https://dummyjson.com/products  ", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setFaculty(result.data.products));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />


      <div className="container">
        
        <Breadcrumb style={{ marginTop: "50px" }}>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>

        <h1>Computer Science</h1>

        <Select
      defaultValue="BSCS"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'BSCS',
          label: 'BSCS',
        },
        {
          value: 'BBA',
          label: 'BBA',
        },
       
        {
          value: 'managment',
          label: 'managment',
        },
      ]}
    />

        <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
        {Faculty ? (
              Faculty.map((item) => {
                // console.log(item);
                return (
          <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
            <Link href={`faculty/${item.id}`}>  
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://conandaily.files.wordpress.com/2020/03/omar-borkan-al-gala.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
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

      <Footer />
    </>
  );
};

export default faculty;
