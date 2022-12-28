import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from "antd";
import Events from "../../components/card/Events";
// import News from "../../components/card/News";
import Link from "next/link";

const ProgramHeader = ({ props }) => {
  return (
    <>
      <Breadcrumb style={{ marginTop: 16 }}>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/admissions">Admissions</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="">{props && props.Id}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={[40, 40]} style={{ marginTop: 16 }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
            <a href={props && props.process}>
              <Button type="">Admission Process</Button>
            </a>
            <a href={props && props.feeStructure}>
              <Button type="">Fee Structure</Button>
            </a>
            <a href={props && props.courseSchemata}>
              <Button type="">Course Schema</Button>
            </a>
            <a href={props && props.apply}>
              <Button type="">Apply Online</Button>
            </a>
          </div>
          <h1 className="page-title" style={{ marginTop: "2%" }}>
            {props.title}
          </h1>
          {/* <p>Lorem ipsum</p> */}
          <p>{props.description}</p>
          <Image width="80%" src={props.imageUrl} />
        </Col>
      </Row>
    </>
  );
};

export default ProgramHeader;
