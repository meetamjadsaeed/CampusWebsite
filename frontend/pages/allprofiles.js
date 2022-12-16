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


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const allprofiles = () => {
  const [AllProfiles, setAllProfiles] = useState();
  const [ProfilebyCat, setProfilebyCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/profiles", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setAllProfiles(result.data));
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
        <h1>All Profiles</h1>

        {/* <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "All",
              label: "All",
            },
            {
              value: "BSCS",
              label: "BSCS",
            },
            {
              value: "BBA",
              label: "BBA",
            },

            {
              value: "Management",
              label: "Management",
            },
          ]}
        /> */}

        <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
          {AllProfiles ? (
            AllProfiles.map((item) => {
              // console.log(item);
              return (
                <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
                  <Link href={`profilebycat/${item.id}`}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

      <FooterTwo />
    </>
  );
};

export default allprofiles;