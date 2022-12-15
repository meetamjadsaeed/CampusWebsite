import React from 'react'
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

const FooterTwo = () => {
    const data = [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ];
  return (
    <>
    <div className="footer-two" style={{marginTop:'5%'}}>
      <div className="container">
        <Row gutter={100} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Image
              width={80}
              height={80}
              src="https://www.freelogoservices.com/blog/wp-content/uploads/transparent-logo.jpg"
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
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}>
            <List
              grid={{ gutter: 0, column: 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Image
                    width={50}
                    height={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </List.Item>
              )}
            />
            <List
              grid={{ gutter: 0, column: 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Image
                    width={50}
                    height={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
  )
}

export default FooterTwo