import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
const { Meta } = Card;
import { Image } from "antd";


export const News = () => {
  return (
    <>
      <Card title="News title" bordered={true}>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={
            <Image
              width={50}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>

      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={
            <Image
              width={50}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>

      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={
            <Image
              width={50}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>
    </Card>
    </>
  );
};
