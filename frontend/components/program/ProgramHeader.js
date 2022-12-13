import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from "antd";
import Events from "../../components/card/Events";
// import News from "../../components/card/News";
import Link from "next/link";

const ProgramHeader = ({props}) => {
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-around",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="#">
              <Button type="primary">Admission process</Button>
            </Link>
            <Link href="#">
              <Button type="primary">Fee Structure</Button>
            </Link>
            <Link href="#">
              <Button type="primary">Course Schema</Button>
            </Link>
            <Link href="#">
              <Button type="primary">Apply Online</Button>
            </Link>
          </div>
          <h1 style={{ marginTop: "2%" }}>{props.title}</h1>
          <p>Lorem ipsum</p>
          <p>{props.description}</p>
        </Col>
        <Col span={8}>
          {/* <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  /> */}
          <Events />
        </Col>
      </Row>
    </>
  );
};

export default ProgramHeader;
