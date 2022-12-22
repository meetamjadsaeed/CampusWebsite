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

const department = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [department, setdepartment] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://iba-kdk.com/wp-json/wp/v2/campus?admissions=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setdepartment(result.data));
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
    <h1 className="page-title">Profiles By Department</h1>

    <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
          {department ? (
            department.map((item) => {
              // console.log(item);
              return (
                <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
                  <Link href={`program/${item.slug}`}>
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
</div>

<FooterTwo />
</>
  );
};

export default department;
