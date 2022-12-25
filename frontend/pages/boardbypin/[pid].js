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
import { Avatar } from "antd";

import ProgramHeader from "../../components/program/ProgramHeader";
import ProgramBody from "../../components/program/ProgramBody";
import Gallery from "../../components/card/Gallery";
import Header from "../../layout/Header/Header";
import FooterTwo from "../../layout/Footer/FooterTwo";
import { useRouter } from "next/router";
import qs from "qs";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Meta } = Card;

const boardbypin = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [boardbypin, setboardbypin] = useState();
  const [imagebypin, setimagebypin] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?pin_board=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setboardbypin(result.data));
    // .then((result) => console.log(result));


    
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?pin_board=${pid}`)
      .then((response) => response.json())
      // .then((result) => console.log(result.json()));
      .then((images) => {
        const respones = images.map(
          (image) =>
            fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_API}media/${image.featured_media}`
            ).then((res) => res.json())
          // .then((res) => console.log(res.json())),
        );
        Promise.all(respones).then((fetchedImgaes) => {
          setimagebypin(fetchedImgaes);
          // setIsLoading(false)
        });
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
          <Row gutter={16} style={{ marginTop: "30px" }}>
            {boardbypin ? (
              boardbypin.map((item) => {
                // console.log(item);
                return (
                  <Col span={8} style={{ marginBottom: "50px" }}>
                    <Link href={`pin/${item.slug}`}>
                      <Card
                        style={{
                          width: 300,
                        }}
                        cover={
                          imagebypin ? (
                            imagebypin.map((featuredImage) => {
                              // console.log(item);
                              if (item.featured_media === featuredImage.id) {
                                return (
                                  <img
                                    alt="example"
                                    src={
                                      featuredImage
                                        ? featuredImage.guid.rendered
                                        : null
                                    }
                                  />
                                );
                              }
                            })
                          ) : (
                            <Spin />
                          )
                        }
                        // actions={[
                        //   <SettingOutlined key="setting" />,
                        //   <EditOutlined key="edit" />,
                        //   <EllipsisOutlined key="ellipsis" />,
                        // ]}
                        className="event-card"
                      >
                        <Meta
                          avatar={
                            <Avatar src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                          }
                          title={item["title"]["rendered"]}
                          description={item["content"]["rendered"].replace(
                            regex,
                            ""
                          )}
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

export default boardbypin;
