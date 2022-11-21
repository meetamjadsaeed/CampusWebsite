import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from 'antd';

export const ProgramHeader = () => {
  return (
    <>
      <Breadcrumb style={{ marginTop: 16 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={100} style={{ marginTop: 16 }}>
        <Col span={16}>
          <h1>Undegraduate Programs</h1>
          <p>Lorem ipsum</p>
          <p>
            The mission of undergradute program is to enhance intellectual and
            professional competencies by imparting knowledge through a
            meritorious culture that encourages critical thinking, active
            learning, ethical consciousness and global awareness
          </p>
    
        <Button type="primary">Admission process</Button>
        <Button type="primary">Fee Structure</Button>

          
        </Col>
        <Col span={8}>
        <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />

        </Col>
      </Row>
    </>
  );
};
