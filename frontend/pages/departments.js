import React from "react";
import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";
import { Card, Col, Row } from 'antd';

const Departments = () => {
  return (
    <>
      <Header />

      <div className="container">

      <div className="site-card-wrapper">
    <Row gutter={16} style={{marginTop:"50px", marginBottom:"50px"}}>
      <Col span={8}>
        <Card title="Computer title" bordered={true}>
        Computer Science
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Computer title" bordered={true}>
        Computer Science
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Computer title" bordered={true}>
        Computer Science
        </Card>
      </Col>
    </Row>
  </div>


      </div>

      <Footer />
    </>
  );
};

export default Departments;
