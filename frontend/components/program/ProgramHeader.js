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
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Program</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={[40, 40]} style={{ marginTop: 16 }}>
        <Col 
        xs={24} sm={24} md={24} lg={24} xl={24}
        >
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
              <Button type="">Admission process</Button>
            </Link>
            <Link href="#">
              <Button type="">Fee Structure</Button>
            </Link>
            <Link href="#">
              <Button type="">Course Schema</Button>
            </Link>
            <Link href="#">
              <Button type="">Apply Online</Button>
            </Link>
          </div>
          <h1 className="page-title" style={{ marginTop: "2%" }}>
            {props.title}
          </h1>
          {/* <p>Lorem ipsum</p> */}
          <p>{props.description}</p>
          <Image
            width="80%"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Artificial_Intelligence_Human_Intelligence.jpg"
          />
        </Col>

      </Row>
    </>
  );
};

export default ProgramHeader;
