import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { CarouselComponent } from "./CarouselComponent";
import { Card, Col, Row } from "antd";

export const ProgramsSlider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={0}>
          <Col span={12}>
            <CarouselComponent />
          </Col>
          <Col span={12}>
            <CarouselComponent />
          </Col>
        </Row>
      </div>
    </>
  );
};
