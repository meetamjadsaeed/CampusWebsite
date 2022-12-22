import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { Card, Col, Row } from "antd";
import { Avatar, List } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";


export const Footer = () => {
  const data = [
    {
      title: "Employee Handbook 20-21",
    },
    {
      title: "Fab Lab",
    },
    {
      title: "Virtual University (Lectures)",
    },
    {
      title: "LMS (eLearning)",
    },
  ];

  const social = [
    {
      title: "Facebook",
    },
    {
      title: "Twitter",
    },
    {
      title: "Linkidin",
    },
    {
      title: "Youtube",
    },
  ];
  return (
    <>
      <div className="footer" style={{marginTop:'5%'}}>
        <div className="container">
          <Row gutter={100} style={{ marginTop: 16 }}>
            <Col span={6}>
              <Image
                width={150}
                height={150}
                src="http://iba-kdk.com/wp-content/uploads/2022/12/Full-White-PNG.png"
              />
            </Col>
            <Col span={6}>
              <h3 className="white">Contact us</h3>
              <p className="white">
                Sukkur IBA University Kandhkot Campus, Opposite to Passport
                Office, Kandhkot Sindh Telephone # 071-025566 Email:
                info@ibakdk-suk.edu.pk
              </p>
            </Col>
            <Col span={6}>
              <h3 className="white">Important Links</h3>

              <List style={{color: '#fff'}}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="#">{item.title}</a>}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={6}>
            <h3 className="white">Social Presence</h3>
            <List style={{color: '#fff'}}
                itemLayout="horizontal"
                dataSource={social}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="#">{item.title}</a>}
                    />
                  </List.Item>
                )}
              />
             
            </Col>
          </Row>
          <Row>
            <div>
              <p className="white">Copyright @ 2020 Sukkur IBA University Kandhkot Campus </p>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
