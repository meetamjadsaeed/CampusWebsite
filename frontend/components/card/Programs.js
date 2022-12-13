import React, { useEffect } from "react";
import { Card } from "antd";
import { ProgramsSlider } from "../slider/ProgramsSlider";
import styles from "./Programs.module.css";
import ReactDOM from "react-dom";
import { Col, Row } from "antd";
import { Image } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// const styles = {
//   padding: "13px",
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
  // border: "10px solid #51484847",
  backgroundColor: "#fff",
  padding: "50px",
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

const Programs = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        transitionTime={500}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        axis={"vertical"}
      >
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
                  width="50%"
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
                  width="50%"
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
                  width="50%"
                  height={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>

      {/* <div
        className="site-card-border-less-wrapper"
        style={{ marginTop: "5%" }}
      >
        <Card
          // styles={styles.tittle}
          className={styles.tittle}
          title="Offered Programs"
          bordered={true}
          style={{ width: "auto" }}
        >
          <ProgramsSlider />
        </Card>
      </div> */}
    </>
  );
};

export default Programs;
