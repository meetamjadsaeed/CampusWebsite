import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from "antd";
import { Space, Table, Tag } from 'antd';

import News from "../../components/card/News";


const ProgramBody = ({props}) => {
  return (
    <>
     
      <Row gutter={100} style={{ marginTop: '2%' }}>
        <Col span={16}>
        <h2 className="page-title">Program Mission Statement:</h2>
        <p>
        {props.mission}
        </p>
        <h2 className="page-title">Program Learning Outcomes (PLO)</h2>
        <p>
        {props.outcomes}
        </p>
        <h2 className="page-title">Eligibility Criteria for Admission:</h2>
        <p>
        {props.eligibility}
        </p>
        </Col>
        <Col span={8}>
          {/* <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          /> */}
          <News/>
        </Col>
      </Row>
    </>
  );
};

export default ProgramBody;

