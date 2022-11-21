import React from "react";
import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";
import { Card, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const { Meta } = Card;
const faculty = () => {
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

        <Row gutter={40} style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>

          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>

          
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default faculty;
