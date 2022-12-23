import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
// import Image from 'next/image';
import { Image } from "antd";
import { Nav } from "./Nav";
import { Slider } from "../../components/slider/MainSlider";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Row>
        <Col span={4}>
          <Row>
            {/* <Col span={24}>
              <Image
                className="logo"
                // width={800}
                height={100}
                src="logo.jpeg"
                style={{float: 'right'}}
              />
            </Col> */}

            <Col span={24}>
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#ea6645",
                  width: "700px",
                }}
              >
                <Link href="/">
                  {/* <h2
                style={{
                  color: '#ffffff',
                  padding: '30px 0 0 0',
                  width: '70%',
                  margin: 'auto',
                  fontWeight: 'bolder',
                }}
                >
                SIBA KDK Campus
                </h2> */}
                  <Image
                    className="logo"
                    // width={100}
                    height={120}
                    src="http://iba-kdk.com/wp-content/uploads/2022/12/Full-White-PNG.png"
                    // style={{marginLeft:"200%"}}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          span={20}
          className="box"
          style={{ height: "100px", backgroundColor: "#012447" }}
        >
          <Nav />
        </Col>
      </Row>

      {/* <Slider/> */}
    </>
  );
};

export default Header;
