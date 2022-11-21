import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
import { Image } from "antd";

const { Meta } = Card;

const Events = () => {
  return (
    <Card title="Events title" bordered={true}>
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
  );
};

export default Events;
