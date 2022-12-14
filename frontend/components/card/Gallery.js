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
import { Player } from "video-react";

const Gallery = () => {
  return (
    <>
      <Row gutter={100} style={{ marginTop: "16px" }}>
        <Col span={14}>
          <Card title="Gallery" bordered={true} style={{ width: "auto" }}>
            <Row gutter={90} style={{ padding: "10px" }}>
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
          </Card>
          {/* <div>
            <p>Pioneer Batch 2018 - Our Alumni</p>
            <p>"We are very lucky to have this campus in our Kandhkot city"</p>
          </div>
          <button className="">View all</button> */}
        </Col>
        <Col span={10}>
          <Card title="Campus tour" bordered={true} style={{ width: "auto" }}>
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;