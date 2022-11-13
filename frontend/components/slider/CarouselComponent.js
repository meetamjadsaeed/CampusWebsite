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

// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   background: "#364d79",
//   width:'700px',
// };

const contentStyle = {
  margin: 0,
  height: "400px",
  color: "#fff",
  // lineHeight: "260px",
  // textAlign: "center",
  // background: '#364d79',
  // background:URL('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  // backgroundImage:
  //   "url(" +
  //   "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" +
  //   ")",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-end",
  border: "10px solid #51484847",
  backgroundColor: "#fff",
};

const content = {
  lineHeight: "0.7",
  backgroundColor: "#00000030",
  padding: "10px",
  width: "50%",
};

const displayFlex = {
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-end",
  alignItems: "flex-start",
};

export const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <div style={contentStyle}>
            <Row gutter={0}>
              <Col span={10}>
                <h3>MS MPhil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean gravida tempor neque, sed blandit felis. Aenean vel
                  augue non ligula porttitor viverra. Nulla id dignissim lacus.
                  Nullam vehicula aliquam{" "}
                </p>
                <button className="primary-button">
                  View Details <ArrowRightOutlined />
                </button>
              </Col>
              <Col span={14}>
                <Image
                  width="100%"
                  height={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
            </Row>
          </div>
        </div>

        <div>
        <div style={contentStyle}>
            <Row gutter={0}>
              <Col span={10}>
                <h3>MS MPhil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean gravida tempor neque, sed blandit felis. Aenean vel
                  augue non ligula porttitor viverra. Nulla id dignissim lacus.
                  Nullam vehicula aliquam{" "}
                </p>
                <button className="primary-button">
                  View Details <ArrowRightOutlined />
                </button>
              </Col>
              <Col span={14}>
                <Image
                  width="100%"
                  height={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>
    </>
  );
};
