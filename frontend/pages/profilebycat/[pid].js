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

import ProgramHeader from "../../components/program/ProgramHeader";
import ProgramBody from "../../components/program/ProgramBody";
import Gallery from "../../components/card/Gallery";
import Header from "../../layout/Header/Header";
import FooterTwo from "../../layout/Footer/FooterTwo";
import { useRouter } from "next/router";



const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const profileByCat = () => {
    const router = useRouter();
    const { pid } = router.query;
  const [ProfilebyCat, setProfilebyCat] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://iba-kdk.com/wp-json/wp/v2/campus?profiles=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setProfilebyCat(result.data));
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
        {/* <h1>Profiles Of: {pid}</h1> */}

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
          {ProfilebyCat ? (
            ProfilebyCat.map((item) => {
              // console.log(item);
              return (
                <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
                  <Link href={`faculty/${item.slug}`}>
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
                        {/* <h1>{item.slug}</h1> */}
                  {/* <h1>dsdsd</h1> */}
                      <Meta
                        title={item.title.rendered}
                        // description={item._links.self["href"]}
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

export default profileByCat;
