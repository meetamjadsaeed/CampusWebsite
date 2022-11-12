import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
// import Image from 'next/image';
import { Image } from "antd";
import { Nav } from './Nav'
import { Slider } from "../../components/slider/MainSlider";



export const Header = () => {
  return (
    <>
    
    <Row >
        <Col span={8}>
          <Row>
            <Col span={24}>
              <Image
                // width={800}
                height={200}
                src="logo.jpeg"
              />
            </Col>

            <Col span={24}>
              <div
                style={{
                  height: "303px",
                  backgroundColor: "#ea6645",
                  width: "700px",
                }}
              ></div>
            </Col>
          </Row>
        </Col>

        <Col span={16} className="box" style={{ height: "500px", backgroundColor: "#012447" }}>
            
          <Nav/>

          
        </Col>
      </Row>

{/* <Slider/> */}


    </>
  )
}
