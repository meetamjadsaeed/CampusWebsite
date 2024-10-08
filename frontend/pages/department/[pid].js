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
import FeaturedImage from "../../components/meta/FeaturedImage";


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const department = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [department, setdepartment] = useState();
  const [imagebydepartment, setimagebydepartment] = useState();


  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?admissions=${pid}`)
      .then((result) => setdepartment(result.data))
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

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?admissions=${pid}`)
    .then((response) => response.json())
    // .then((result) => console.log(result.json()));
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
  
    })
    .then((images) => {
      const respones = images.map(
        (image) =>
          fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API}media/${image.featured_media}`
          ).then((res) => res.json())
        // .then((res) => console.log(res.json())),
      );
      Promise.all(respones).then((fetchedImgaes) => {
        setimagebydepartment(fetchedImgaes);
        // setIsLoading(false)
      });
    })
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
          <Breadcrumb.Item>
            <Link href="">{pid}</Link>
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
    {/* <h1 className="page-title">Profiles By Department</h1> */}

    <Row gutter={40} style={{ marginTop: "2%", marginBottom: "2%" }}>
          {department ? (
            department.map((item) => {
              // console.log(item);
              return (
                <Col style={{ marginTop: "2%", marginBottom: "2%" }}>
                  <Link href={`program/${item.id}`}>
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
