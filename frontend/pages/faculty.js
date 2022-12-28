import React from "react";
import Header from "../layout/Header/Header";
import FooterTwo from "../layout/Footer/FooterTwo";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb ,Button} from "antd";
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
  const [AllProfiles, setAllProfiles] = useState();
  const [ProfilebyCat, setProfilebyCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/profiles")
      .then((result) => setAllProfiles(result.data));
    // .then((result) => console.log(result));

    await axios
    .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result) => setProfilebyCat(result.data))
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
        {AllProfiles ? (
              AllProfiles.map((item) => {
                // console.log(item);
                return (
                  <Link href={`faculty/${item.id}`}>  
        <Button type="">{item.name}</Button>
                  </Link>
        

        );
      })
    ) : (
      <Spin />
    )}
        
        <h1>All</h1>

        <Select
      defaultValue="All"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'All',
          label: 'All',
        },
        {
          value: 'BSCS',
          label: 'BSCS',
        },
        {
          value: 'BBA',
          label: 'BBA',
        },
       
        {
          value: 'Management',
          label: 'Management',
        },
      ]}
    />

        <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
        {AllProfiles ? (
              AllProfiles.map((item) => {
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

      <FooterTwo />
    </>
  );
};

export default faculty;
