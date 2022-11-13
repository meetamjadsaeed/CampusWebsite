import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { Card, Col, Row } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export const Scholarships = () => {
  return (
    <>
      <Card
        title="Scholarships /Financial Ads "
        bordered={true}
        style={{ width: "auto", marginTop: 16 }}
      >
        <Row gutter={100} style={{ marginTop: 16 }}>
        <Col span={10}>
        <Row gutter={100} style={{ marginTop: 16 }}>
        <Col span={3}>
        <Image
                  width={80}
                  height={80}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
        </Col>

        <Col span={3}>
        <Image
                  width={80}
                  height={80}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
        </Col>

        <Col span={3}>
        <Image
                  width={80}
                  height={80}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
        </Col>

        <Col span={3}>
        <Image
                  width={80}
                  height={80}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
        </Col>
        
        </Row>
        </Col>

        <Col span={14}>
            <button className="primary-button">Pay Online</button>
        </Col>


        </Row>
      </Card>
    </>
  );
};
